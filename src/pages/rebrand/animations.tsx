import React, { useRef } from 'react'
import styled from '@emotion/styled'

const output = [
  '    <span class="green">Blocking</span> waiting for file lock on package cache',
  '    <span class="orange">Installing</span> nu v0.28.0 (/workspace/nushell)',
  '      <span class="green">Blocking</span> waiting for file lock on package cache',
  '      <span class="orange">Updating</span> crates.io index',
  '      <span class="green">Blocking</span> waiting for file lock on package cache',
  '   <span class="orange">Downloading</span> crates ...',
  '    <span class="orange">Downloaded</span> quote v1.0.9',
  '    <span class="orange">Downloaded</span> async-attributes v1.1.2',
  '    <span class="orange">Downloaded</span> byteorder v1.4.3',
  '    <span class="orange">Downloaded</span> byte-unit v4.0.10',
  '    <span class="orange">Downloaded</span> tower-service v0.3.1',
  '    <span class="orange">Downloaded</span> tinyvec v1.1.1',
  '    <span class="orange">Downloaded</span> futures-io v0.3.13',
  '    <span class="orange">Downloaded</span> tracing-attributes v0.1.14',
  '    <span class="orange">Downloaded</span> tracing v0.1.25',
  '    <span class="orange">Downloaded</span> libc v0.2.88',
  '    <span class="orange">Downloaded</span> cc v1.0.67',
  '    <span class="orange">Downloaded</span> futures v0.1.31',
  '    <span class="orange">Downloaded</span> futures-task v0.3.13',
  '    <span class="orange">Downloaded</span> codespan-reporting v0.11.1',
  '    <span class="orange">Downloaded</span> serde_yaml v0.8.17',
  '    <span class="orange">Downloaded</span> tracing-futures v0.2.5',
  '    <span class="orange">Downloaded</span> thread_local v1.1.3',
  '    <span class="orange">Downloaded</span> crossbeam-utils v0.8.3',
  '    <span class="orange">Downloaded</span> hyper v0.13.10',
  '    <span class="orange">Downloaded</span> futures-util v0.3.13',
  '    <span class="orange">Downloaded</span> time v0.1.44',
  '    <span class="orange">Downloaded</span> pin-project-lite v0.2.6',
  '    <span class="orange">Downloaded</span> serde_json v1.0.64',
  '    <span class="orange">Downloaded</span> rand_core v0.6.2',
  '    <span class="orange">Downloaded</span> pin-project v1.0.5',
  '    <span class="orange">Downloaded</span> bstr v0.2.15',
  '    <span class="orange">Downloaded</span> unicode-normalization v0.1.17',
  '    <span class="orange">Downloaded</span> parking_lot_core v0.8.3',
  '    <span class="orange">Downloaded</span> curl v0.4.35',
  '    <span class="orange">Downloaded</span> tokio v0.2.25',
  '    <span class="orange">Downloaded</span> nix v0.20.0',
  '    <span class="orange">Downloaded</span> git2 v0.13.17',
  '    <span class="orange">Downloaded</span> lexical-core v0.7.5',
  '    <span class="orange">Downloaded</span> csv v1.1.6',
  '    <span class="orange">Downloaded</span> async-channel v1.6.1',
  '    <span class="orange">Downloaded</span> idna v0.2.2',
  '    <span class="orange">Downloaded</span> async-trait v0.1.48',
  '    <span class="orange">Downloaded</span> pin-project-lite v0.1.12',
  '    <span class="orange">Downloaded</span> once_cell v1.7.2',
  '    <span class="orange">Downloaded</span> libgit2-sys v0.12.18+1.1.0',
  '    <span class="orange">Downloaded</span> num-bigint v0.3.2',
  '    <span class="orange">Downloaded</span> zip v0.5.11',
  '    <span class="orange">Downloaded</span> shadow-rs v0.5.24',
  '    <span class="orange">Downloaded</span> futures-core v0.3.13',
  '    <span class="orange">Downloaded</span> curl-sys v0.4.41+curl-7.75.0',
  '    <span class="orange">Downloaded</span> nb-connect v1.0.3',
  '    <span class="orange">Downloaded</span> futures-executor v0.3.13',
  '    <span class="orange">Downloaded</span> futures v0.3.13',
  '    <span class="orange">Downloaded</span> serde_derive v1.0.124',
  '    <span class="orange">Downloaded</span> futures-channel v0.3.13',
  '    <span class="orange">Downloaded</span> crossbeam-epoch v0.9.3',
  '    <span class="orange">Downloaded</span> thiserror v1.0.24',
  '    <span class="orange">Downloaded</span> indexmap v1.6.2',
  '    <span class="orange">Downloaded</span> libnghttp2-sys v0.1.6+1.43.0',
  '    <span class="orange">Downloaded</span> eml-parser v0.1.2',
  '    <span class="orange">Downloaded</span> futures-sink v0.3.13',
  '    <span class="orange">Downloaded</span> futures-macro v0.3.13',
  '    <span class="orange">Downloaded</span> ctrlc v3.1.8',
  '    <span class="orange">Downloaded</span> ansi_colours v1.0.2',
  '    <span class="orange">Downloaded</span> thiserror-impl v1.0.24',
  '    <span class="orange">Downloaded</span> pin-project-internal v1.0.5',
  '    <span class="orange">Downloaded</span> sysinfo v0.16.4',
  '    <span class="orange">Downloaded</span> syn v1.0.63',
  '    <span class="orange">Downloaded</span> serde v1.0.124',
  '    <span class="orange">Downloaded</span> http-client v6.3.4',
  '    <span class="orange">Downloaded</span> form_urlencoded v1.0.1',
  '    <span class="orange">Downloaded</span> serde_test v1.0.124',
  '    <span class="orange">Downloaded</span> plist v1.1.0',
  '    <span class="orange">Downloaded</span> path_abs v0.5.1',
  '    <span class="orange">Downloaded</span> httparse v1.3.5',
  '    <span class="orange">Downloaded</span> derive-new v0.5.9',
  '    <span class="orange">Downloaded</span> bzip2-sys v0.1.10+1.0.8',
  '     <span class="orange">Compiling</span> libc v0.2.88',
  '     <span class="orange">Compiling</span> proc-macro2 v1.0.24',
  '     <span class="orange">Compiling</span> unicode-xid v0.2.1',
  '     <span class="orange">Compiling</span> syn v1.0.63',
  '     <span class="orange">Compiling</span> autocfg v1.0.1',
  '     <span class="orange">Compiling</span> cfg-if v1.0.0',
  '     <span class="orange">Compiling</span> version_check v0.9.2',
  '     <span class="orange">Compiling</span> memchr v2.3.4',
  '     <span class="orange">Compiling</span> serde_derive v1.0.124',
  '     <span class="orange">Compiling</span> serde v1.0.124',
  '     <span class="orange">Compiling</span> value-bag v1.0.0-alpha.6',
  '     <span class="orange">Compiling</span> log v0.4.14',
  '     <span class="orange">Compiling</span> pkg-config v0.3.19',
  '     <span class="orange">Compiling</span> lazy_static v1.4.0',
  '     <span class="orange">Compiling</span> bitflags v1.2.1',
  '     <span class="orange">Compiling</span> itoa v0.4.7',
  '     <span class="orange">Compiling</span> byteorder v1.4.3',
  '     <span class="orange">Compiling</span> once_cell v1.7.2',
  '     <span class="orange">Compiling</span> cfg-if v0.1.10',
  '     <span class="orange">Compiling</span> ryu v1.0.5',
  '     <span class="orange">Compiling</span> futures-core v0.3.13',
  '     <span class="orange">Compiling</span> slab v0.4.2',
  '     <span class="orange">Compiling</span> hashbrown v0.9.1',
  '     <span class="orange">Compiling</span> pin-project-lite v0.2.6',
  '     <span class="orange">Compiling</span> serde_json v1.0.64',
  '     <span class="orange">Compiling</span> fnv v1.0.7',
  '     <span class="orange">Compiling</span> futures-io v0.3.13',
  '     <span class="orange">Compiling</span> unicode-width v0.1.8',
  '     <span class="orange">Compiling</span> proc-macro-hack v0.5.19',
  '     <span class="orange">Compiling</span> typenum v1.12.0',
  '     <span class="orange">Compiling</span> pin-utils v0.1.0',
  '     <span class="orange">Compiling</span> getrandom v0.2.2',
  '     <span class="orange">Compiling</span> futures v0.1.31',
  '     <span class="orange">Compiling</span> ppv-lite86 v0.2.10',
  '     <span class="orange">Compiling</span> futures-sink v0.3.13',
  '     <span class="orange">Compiling</span> termcolor v1.1.2',
  '     <span class="orange">Compiling</span> dtoa v0.4.7',
  '     <span class="orange">Compiling</span> typed-arena v1.7.0',
  '     <span class="orange">Compiling</span> regex-syntax v0.6.22',
  '     <span class="orange">Compiling</span> proc-macro-nested v0.1.7',
  '     <span class="orange">Compiling</span> bytes v0.5.6',
  '     <span class="orange">Compiling</span> nu-ansi-term v0.28.0 (/workspace/nushell/crates/nu-ansi-term)',
  '     <span class="orange">Compiling</span> percent-encoding v2.1.0',
  '     <span class="orange">Compiling</span> matches v0.1.8',
  '     <span class="orange">Compiling</span> tinyvec_macros v0.1.0',
  '     <span class="orange">Compiling</span> futures-task v0.3.13',
  '     <span class="orange">Compiling</span> either v1.6.1',
  '     <span class="orange">Compiling</span> utf8-width v0.1.4',
  '     <span class="orange">Compiling</span> scopeguard v1.1.0',
  '     <span class="orange">Compiling</span> glob v0.3.0',
  '     <span class="orange">Compiling</span> pin-project-lite v0.1.12',
  '     <span class="orange">Compiling</span> remove_dir_all v0.5.3',
  '     <span class="orange">Compiling</span> parking v2.0.0',
  '     <span class="orange">Compiling</span> dunce v1.0.1',
  '     <span class="orange">Compiling</span> cache-padded v1.1.1',
  '     <span class="orange">Compiling</span> waker-fn v1.1.0',
  '     <span class="orange">Compiling</span> fastrand v1.4.0',
  '     <span class="orange">Compiling</span> opaque-debug v0.3.0',
  '     <span class="orange">Compiling</span> event-listener v2.5.1',
  '     <span class="orange">Compiling</span> bytes v1.0.1',
  '     <span class="orange">Compiling</span> subtle v2.4.0',
  '     <span class="orange">Compiling</span> base64 v0.13.0',
  '     <span class="orange">Compiling</span> vec-arena v1.0.0',
  '     <span class="orange">Compiling</span> getrandom v0.1.16',
  '     <span class="orange">Compiling</span> async-task v4.0.3',
  '     <span class="orange">Compiling</span> openssl-probe v0.1.2',
  '     <span class="orange">Compiling</span> crc32fast v1.2.1',
  '     <span class="orange">Compiling</span> atomic-waker v1.0.0',
  '     <span class="orange">Compiling</span> rayon-core v1.9.0',
  '     <span class="orange">Compiling</span> encoding_rs v0.8.28',
  '     <span class="orange">Compiling</span> adler32 v1.2.0',
  '     <span class="orange">Compiling</span> curl v0.4.35',
  '     <span class="orange">Compiling</span> const_fn v0.4.5',
  '     <span class="orange">Compiling</span> same-file v1.0.6',
  '     <span class="orange">Compiling</span> cpuid-bool v0.2.0',
  '     <span class="orange">Compiling</span> foreign-types-shared v0.1.1',
  '     <span class="orange">Compiling</span> async-trait v0.1.48',
  '     <span class="orange">Compiling</span> arrayvec v0.4.12',
  '     <span class="orange">Compiling</span> futures-sink-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> cpuid-bool v0.1.2',
  '     <span class="orange">Compiling</span> futures-core-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> encoding_index_tests v0.1.4',
  '     <span class="orange">Compiling</span> openssl v0.10.32',
  '     <span class="orange">Compiling</span> native-tls v0.2.7',
  '     <span class="orange">Compiling</span> futures-io-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> lexical-core v0.7.5',
  '     <span class="orange">Compiling</span> httparse v1.3.5',
  '     <span class="orange">Compiling</span> nodrop v0.1.14',
  '     <span class="orange">Compiling</span> unicode-xid v0.0.4',
  '     <span class="orange">Compiling</span> serde v0.8.23',
  '     <span class="orange">Compiling</span> pin-project-internal v0.4.27',
  '     <span class="orange">Compiling</span> quick-error v1.2.3',
  '     <span class="orange">Compiling</span> anyhow v1.0.38',
  '     <span class="orange">Compiling</span> quote v0.3.15',
  '     <span class="orange">Compiling</span> arrayvec v0.5.2',
  '     <span class="orange">Compiling</span> ucd-trie v0.1.3',
  '     <span class="orange">Compiling</span> static_assertions v1.1.0',
  '     <span class="orange">Compiling</span> unicode-segmentation v1.7.1',
  '     <span class="orange">Compiling</span> try-lock v0.2.3',
  '     <span class="orange">Compiling</span> data-encoding v2.3.2',
  '     <span class="orange">Compiling</span> strsim v0.8.0',
  '     <span class="orange">Compiling</span> bit-vec v0.6.3',
  '     <span class="orange">Compiling</span> ansi_term v0.11.0',
  '     <span class="orange">Compiling</span> vec_map v0.8.2',
  '     <span class="orange">Compiling</span> ansi_term v0.12.1',
  '     <span class="orange">Compiling</span> smallvec v1.6.1',
  '     <span class="orange">Compiling</span> doc-comment v0.3.3',
  '     <span class="orange">Compiling</span> isahc v0.9.14',
  '     <span class="orange">Compiling</span> httpdate v0.3.2',
  '     <span class="orange">Compiling</span> safemem v0.3.3',
  '     <span class="orange">Compiling</span> query_interface v0.3.5',
  '     <span class="orange">Compiling</span> tower-service v0.3.1',
  '     <span class="orange">Compiling</span> mime v0.3.16',
  '     <span class="orange">Compiling</span> http-types v2.10.0',
  '     <span class="orange">Compiling</span> lazy_static v0.2.11',
  '     <span class="orange">Compiling</span> utf8parse v0.1.1',
  '     <span class="orange">Compiling</span> isahc v0.7.6',
  '     <span class="orange">Compiling</span> fixedbitset v0.2.0',
  '     <span class="orange">Compiling</span> rust-ini v0.13.0',
  '     <span class="orange">Compiling</span> nix v0.18.0',
  '     <span class="orange">Compiling</span> sysinfo v0.16.4',
  '     <span class="orange">Compiling</span> infer v0.2.3',
  '     <span class="orange">Compiling</span> utf8parse v0.2.0',
  '     <span class="orange">Compiling</span> peresil v0.3.0',
  '     <span class="orange">Compiling</span> xml-rs v0.8.3',
  '     <span class="orange">Compiling</span> void v1.0.2',
  '     <span class="orange">Compiling</span> result v1.0.0',
  '     <span class="orange">Compiling</span> umask v1.0.0',
  '     <span class="orange">Compiling</span> nom v1.2.4',
  '     <span class="orange">Compiling</span> lazycell v1.3.0',
  '     <span class="orange">Compiling</span> xmlparser v0.13.3',
  '     <span class="orange">Compiling</span> filesize v0.2.0',
  '     <span class="orange">Compiling</span> fs_extra v1.2.0',
  '     <span class="orange">Compiling</span> std_prelude v0.2.12',
  '     <span class="orange">Compiling</span> pretty-hex v0.2.1',
  '     <span class="orange">Compiling</span> htmlescape v0.3.1',
  '     <span class="orange">Compiling</span> wild v2.0.4',
  '     <span class="orange">Compiling</span> shell-words v1.0.0',
  '     <span class="orange">Compiling</span> futures-timer v3.0.2',
  '     <span class="orange">Compiling</span> instant v0.1.9',
  '     <span class="orange">Compiling</span> num-traits v0.2.14',
  '     <span class="orange">Compiling</span> num-integer v0.1.44',
  '     <span class="orange">Compiling</span> indexmap v1.6.2',
  '     <span class="orange">Compiling</span> num-bigint v0.3.2',
  '     <span class="orange">Compiling</span> crossbeam-utils v0.8.3',
  '     <span class="orange">Compiling</span> memoffset v0.6.1',
  '     <span class="orange">Compiling</span> num-bigint v0.2.6',
  '     <span class="orange">Compiling</span> rayon v1.5.0',
  '     <span class="orange">Compiling</span> num-iter v0.1.42',
  '     <span class="orange">Compiling</span> num-complex v0.2.4',
  '     <span class="orange">Compiling</span> num-rational v0.2.4',
  '     <span class="orange">Compiling</span> generic-array v0.14.4',
  '     <span class="orange">Compiling</span> proc-macro-error-attr v1.0.4',
  '     <span class="orange">Compiling</span> proc-macro-error v1.0.4',
  '     <span class="orange">Compiling</span> standback v0.2.15',
  '     <span class="orange">Compiling</span> unicase v2.6.0',
  '     <span class="orange">Compiling</span> time v0.2.25',
  '     <span class="orange">Compiling</span> nom v5.1.2',
  '     <span class="orange">Compiling</span> cookie v0.14.4',
  '     <span class="orange">Compiling</span> error-chain v0.12.4',
  '     <span class="orange">Compiling</span> tracing-core v0.1.17',
  '     <span class="orange">Compiling</span> regex-automata v0.1.9',
  '     <span class="orange">Compiling</span> thread_local v1.1.3',
  '     <span class="orange">Compiling</span> crossbeam-utils v0.6.6',
  '     <span class="orange">Compiling</span> futures-channel v0.3.13',
  '     <span class="orange">Compiling</span> pretty v0.5.2',
  '     <span class="orange">Compiling</span> unicode-bidi v0.3.4',
  '     <span class="orange">Compiling</span> form_urlencoded v1.0.1',
  '     <span class="orange">Compiling</span> tinyvec v1.1.1',
  '     <span class="orange">Compiling</span> byte-unit v4.0.10',
  '     <span class="orange">Compiling</span> lock_api v0.4.2',
  '     <span class="orange">Compiling</span> itertools v0.10.0',
  '     <span class="orange">Compiling</span> concurrent-queue v1.2.2',
  '     <span class="orange">Compiling</span> async-mutex v1.4.0',
  '     <span class="orange">Compiling</span> async-lock v2.3.0',
  '     <span class="orange">Compiling</span> http v0.2.3',
  '     <span class="orange">Compiling</span> miniz_oxide v0.3.7',
  '     <span class="orange">Compiling</span> walkdir v2.3.1',
  '     <span class="orange">Compiling</span> foreign-types v0.3.2',
  '     <span class="orange">Compiling</span> futures-channel-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> encoding-index-tradchinese v1.20141219.5',
  '     <span class="orange">Compiling</span> encoding-index-singlebyte v1.20141219.5',
  '     <span class="orange">Compiling</span> encoding-index-korean v1.20141219.5',
  '     <span class="orange">Compiling</span> encoding-index-simpchinese v1.20141219.5',
  '     <span class="orange">Compiling</span> encoding-index-japanese v1.20141219.5',
  '     <span class="orange">Compiling</span> synom v0.11.3',
  '     <span class="orange">Compiling</span> humantime v1.3.0',
  '     <span class="orange">Compiling</span> pest v2.1.3',
  '     <span class="orange">Compiling</span> heck v0.3.2',
  '     <span class="orange">Compiling</span> serde_test v0.8.23',
  '     <span class="orange">Compiling</span> bit-set v0.5.2',
  '     <span class="orange">Compiling</span> line-wrap v0.1.1',
  '     <span class="orange">Compiling</span> tint v1.0.1',
  '     <span class="orange">Compiling</span> vte v0.3.3',
  '     <span class="orange">Compiling</span> sxd-document v0.3.2',
  '     <span class="orange">Compiling</span> roxmltree v0.14.0',
  '     <span class="orange">Compiling</span> path_abs v0.5.1',
  '     <span class="orange">Compiling</span> meval v0.2.0',
  '     <span class="orange">Compiling</span> crossbeam-channel v0.3.9',
  '     <span class="orange">Compiling</span> sluice v0.5.4',
  '     <span class="orange">Compiling</span> spinning_top v0.2.2',
  '     <span class="orange">Compiling</span> async-channel v1.6.1',
  '     <span class="orange">Compiling</span> unicode-normalization v0.1.17',
  '     <span class="orange">Compiling</span> rust-embed-utils v5.1.0',
  '     <span class="orange">Compiling</span> sluice v0.4.2',
  '     <span class="orange">Compiling</span> http-body v0.3.1',
  '     <span class="orange">Compiling</span> encoding v0.2.33',
  '     <span class="orange">Compiling</span> syn v0.11.11',
  '     <span class="orange">Compiling</span> semver-parser v0.10.2',
  '     <span class="orange">Compiling</span> strip-ansi-escapes v0.1.0',
  '     <span class="orange">Compiling</span> linked-hash-map v0.3.0',
  '     <span class="orange">Compiling</span> sxd-xpath v0.4.2',
  '     <span class="orange">Compiling</span> iovec v0.1.4',
  '     <span class="orange">Compiling</span> time v0.1.44',
  '     <span class="orange">Compiling</span> num_cpus v1.13.0',
  '     <span class="orange">Compiling</span> socket2 v0.3.19',
  '     <span class="orange">Compiling</span> net2 v0.2.37',
  '     <span class="orange">Compiling</span> dirs-sys-next v0.1.2',
  '     <span class="orange">Compiling</span> atty v0.2.14',
  '     <span class="orange">Compiling</span> term_size v0.3.2',
  '     <span class="orange">Compiling</span> dirs-sys v0.3.5',
  '     <span class="orange">Compiling</span> parking_lot_core v0.8.3',
  '     <span class="orange">Compiling</span> fs2 v0.4.3',
  '     <span class="orange">Compiling</span> terminal_size v0.1.16',
  '     <span class="orange">Compiling</span> quote v1.0.9',
  '     <span class="orange">Compiling</span> jobserver v0.1.21',
  '     <span class="orange">Compiling</span> aho-corasick v0.7.15',
  '     <span class="orange">Compiling</span> futures-lite v1.11.3',
  '     <span class="orange">Compiling</span> csv-core v0.1.10',
  '     <span class="orange">Compiling</span> content_inspector v0.2.4',
  '     <span class="orange">Compiling</span> quick-xml v0.21.0',
  '     <span class="orange">Compiling</span> nix v0.19.1',
  '     <span class="orange">Compiling</span> nix v0.20.0',
  '     <span class="orange">Compiling</span> flume v0.9.2',
  '     <span class="orange">Compiling</span> flate2 v1.0.14',
  '     <span class="orange">Compiling</span> idna v0.2.2',
  '     <span class="orange">Compiling</span> quick-xml v0.19.0',
  '     <span class="orange">Compiling</span> codepage v0.1.1',
  '     <span class="orange">Compiling</span> semver v0.11.0',
  '     <span class="orange">Compiling</span> bytes v0.4.12',
  '     <span class="orange">Compiling</span> rand_core v0.6.2',
  '     <span class="orange">Compiling</span> uuid v0.8.2',
  '     <span class="orange">Compiling</span> derive_is_enum_variant v0.1.1',
  '     <span class="orange">Compiling</span> nb-connect v1.0.3',
  '     <span class="orange">Compiling</span> dashmap v4.0.2',
  '     <span class="orange">Compiling</span> dirs-next v2.0.0',
  '     <span class="orange">Compiling</span> directories-next v2.0.0',
  '     <span class="orange">Compiling</span> dirs-next v1.0.2',
  '     <span class="orange">Compiling</span> rand_core v0.5.1',
  '     <span class="orange">Compiling</span> textwrap v0.11.0',
  '     <span class="orange">Compiling</span> directories v2.0.2',
  '     <span class="orange">Compiling</span> dirs v3.0.1',
  '     <span class="orange">Compiling</span> parking_lot v0.11.1',
  '     <span class="orange">Compiling</span> num-traits v0.1.43',
  '     <span class="orange">Compiling</span> ordered-float v1.1.1',
  '     <span class="orange">Compiling</span> cc v1.0.67',
  '     <span class="orange">Compiling</span> blocking v1.0.2',
  '     <span class="orange">Compiling</span> async-executor v1.4.0',
  '     <span class="orange">Compiling</span> regex v1.4.3',
  '     <span class="orange">Compiling</span> crossbeam-epoch v0.9.3',
  '     <span class="orange">Compiling</span> crossbeam-channel v0.5.0',
  '     <span class="orange">Compiling</span> mime_guess v2.0.3',
  '     <span class="orange">Compiling</span> digest v0.9.0',
  '     <span class="orange">Compiling</span> cipher v0.2.5',
  '     <span class="orange">Compiling</span> universal-hash v0.4.0',
  '     <span class="orange">Compiling</span> block-buffer v0.9.0',
  '     <span class="orange">Compiling</span> crypto-mac v0.10.0',
  '     <span class="orange">Compiling</span> aead v0.3.2',
  '     <span class="orange">Compiling</span> ctrlc v3.1.8',
  '     <span class="orange">Compiling</span> rand_chacha v0.3.0',
  '     <span class="orange">Compiling</span> http v0.1.21',
  '     <span class="orange">Compiling</span> shellexpand v2.1.0',
  '     <span class="orange">Compiling</span> term v0.7.0',
  '     <span class="orange">Compiling</span> rand_chacha v0.2.2',
  '     <span class="orange">Compiling</span> clap v2.33.3',
  '     <span class="orange">Compiling</span> crossbeam-deque v0.8.0',
  '     <span class="orange">Compiling</span> parse-zoneinfo v0.3.0',
  '     <span class="orange">Compiling</span> nu-table v0.28.0 (/workspace/nushell/crates/nu-table)',
  '     <span class="orange">Compiling</span> serde-hjson v0.9.1',
  '     <span class="orange">Compiling</span> fancy-regex v0.3.5',
  '     <span class="orange">Compiling</span> titlecase v1.1.0',
  '     <span class="orange">Compiling</span> Inflector v0.11.4',
  '     <span class="orange">Compiling</span> eml-parser v0.1.2',
  '     <span class="orange">Compiling</span> console v0.13.0',
  '     <span class="orange">Compiling</span> libz-sys v1.1.2',
  '     <span class="orange">Compiling</span> openssl-sys v0.9.60',
  '     <span class="orange">Compiling</span> libgit2-sys v0.12.18+1.1.0',
  '     <span class="orange">Compiling</span> libnghttp2-sys v0.1.6+1.43.0',
  '     <span class="orange">Compiling</span> curl-sys v0.4.41+curl-7.75.0',
  '     <span class="orange">Compiling</span> bzip2-sys v0.1.10+1.0.8',
  '     <span class="orange">Compiling</span> onig_sys v69.6.0',
  '     <span class="orange">Compiling</span> ansi_colours v1.0.2',
  '     <span class="orange">Compiling</span> aes-soft v0.6.4',
  '     <span class="orange">Compiling</span> ctr v0.6.0',
  '     <span class="orange">Compiling</span> polyval v0.4.5',
  '     <span class="orange">Compiling</span> sha2 v0.9.3',
  '     <span class="orange">Compiling</span> hmac v0.10.1',
  '     <span class="orange">Compiling</span> rand v0.8.3',
  '     <span class="orange">Compiling</span> rand v0.7.3',
  '     <span class="orange">Compiling</span> ctor v0.1.19',
  '     <span class="orange">Compiling</span> derive-new v0.5.9',
  '     <span class="orange">Compiling</span> futures-macro v0.3.13',
  '     <span class="orange">Compiling</span> thiserror-impl v1.0.24',
  '     <span class="orange">Compiling</span> pin-project-internal v1.0.5',
  '     <span class="orange">Compiling</span> tracing-attributes v0.1.14',
  '     <span class="orange">Compiling</span> async-attributes v1.1.2',
  '     <span class="orange">Compiling</span> time-macros-impl v0.1.1',
  '     <span class="orange">Compiling</span> smart-default v0.6.0',
  '     <span class="orange">Compiling</span> async-recursion v0.3.2',
  '     <span class="orange">Compiling</span> rust-embed-impl v5.9.0',
  '     <span class="orange">Compiling</span> num-format v0.4.0',
  '     <span class="orange">Compiling</span> chrono-tz v0.5.3',
  '     <span class="orange">Compiling</span> bat v0.17.1',
  '     <span class="orange">Compiling</span> aes v0.6.0',
  '     <span class="orange">Compiling</span> ghash v0.3.1',
  '     <span class="orange">Compiling</span> getset v0.1.1',
  '     <span class="orange">Compiling</span> hkdf v0.10.0',
  '     <span class="orange">Compiling</span> tempfile v3.2.0',
  '     <span class="orange">Compiling</span> thiserror v1.0.24',
  '     <span class="orange">Compiling</span> pin-project v1.0.5',
  '     <span class="orange">Compiling</span> time-macros v0.1.1',
  '     <span class="orange">Compiling</span> rust-embed v5.9.0',
  '     <span class="orange">Compiling</span> num v0.2.1',
  '     <span class="orange">Compiling</span> pin-project v0.4.27',
  '     <span class="orange">Compiling</span> aes-gcm v0.8.0',
  '     <span class="orange">Compiling</span> which v4.0.2',
  '     <span class="orange">Compiling</span> ical v0.7.0',
  '     <span class="orange">Compiling</span> tokio-io v0.1.13',
  '     <span class="orange">Compiling</span> mio v0.6.23',
  '     <span class="orange">Compiling</span> polling v2.0.2',
  '     <span class="orange">Compiling</span> tracing v0.1.25',
  '     <span class="orange">Compiling</span> kv-log-macro v1.0.7',
  '     <span class="orange">Compiling</span> users v0.11.0',
  '     <span class="orange">Compiling</span> want v0.3.0',
  '     <span class="orange">Compiling</span> rustyline v7.1.0',
  '     <span class="orange">Compiling</span> rustyline v6.3.0',
  '     <span class="orange">Compiling</span> env_logger v0.7.1',
  '     <span class="orange">Compiling</span> futures-util v0.3.13',
  '     <span class="orange">Compiling</span> futures-util-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> serde_test v1.0.124',
  '     <span class="orange">Compiling</span> chrono v0.4.19',
  '     <span class="orange">Compiling</span> toml v0.5.8',
  '     <span class="orange">Compiling</span> codespan-reporting v0.11.1',
  '     <span class="orange">Compiling</span> nu-source v0.28.0 (/workspace/nushell/crates/nu-source)',
  '     <span class="orange">Compiling</span> serde_bytes v0.11.5',
  '     <span class="orange">Compiling</span> url v2.2.1',
  '     <span class="orange">Compiling</span> serde_urlencoded v0.7.0',
  '     <span class="orange">Compiling</span> bstr v0.2.15',
  '     <span class="orange">Compiling</span> serde_qs v0.7.2',
  '     <span class="orange">Compiling</span> serde-value v0.6.0',
  '     <span class="orange">Compiling</span> rust_decimal v0.10.2',
  '     <span class="orange">Compiling</span> bincode v1.3.1',
  '     <span class="orange">Compiling</span> serde_ini v0.2.0',
  '     <span class="orange">Compiling</span> tracing-futures v0.2.5',
  '     <span class="orange">Compiling</span> async-io v1.3.1',
  '     <span class="orange">Compiling</span> tokio v0.2.25',
  '     <span class="orange">Compiling</span> pretty_env_logger v0.4.0',
  '     <span class="orange">Compiling</span> petgraph v0.5.1',
  '     <span class="orange">Compiling</span> linked-hash-map v0.5.4',
  '     <span class="orange">Compiling</span> futures-executor-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> futures-executor v0.3.13',
  '     <span class="orange">Compiling</span> plist v1.1.0',
  '     <span class="orange">Compiling</span> bigdecimal v0.2.0',
  '     <span class="orange">Compiling</span> serde_urlencoded v0.6.1',
  '     <span class="orange">Compiling</span> globset v0.4.6',
  '     <span class="orange">Compiling</span> csv v1.1.6',
  '     <span class="orange">Compiling</span> yaml-rust v0.4.5',
  '     <span class="orange">Compiling</span> nu-json v0.28.0 (/workspace/nushell/crates/nu-json)',
  '     <span class="orange">Compiling</span> futures-preview v0.3.0-alpha.19',
  '     <span class="orange">Compiling</span> futures v0.3.13',
  '     <span class="orange">Compiling</span> async-global-executor v2.0.2',
  '     <span class="orange">Compiling</span> tokio-util v0.3.1',
  '     <span class="orange">Compiling</span> tokio-tls v0.3.1',
  '     <span class="orange">Compiling</span> serde_yaml v0.8.17',
  '     <span class="orange">Compiling</span> config v0.10.1',
  '     <span class="orange">Compiling</span> futures_codec v0.4.1',
  '     <span class="orange">Compiling</span> async-std v1.9.0',
  '     <span class="orange">Compiling</span> h2 v0.2.7',
  '     <span class="orange">Compiling</span> ptree v0.3.1',
  '     <span class="orange">Compiling</span> nu-errors v0.28.0 (/workspace/nushell/crates/nu-errors)',
  '     <span class="orange">Compiling</span> dtparse v1.2.0',
  '     <span class="orange">Compiling</span> nu-protocol v0.28.0 (/workspace/nushell/crates/nu-protocol)',
  '     <span class="orange">Compiling</span> ichwh v0.3.4',
  '     <span class="orange">Compiling</span> bzip2 v0.3.3',
  '     <span class="orange">Compiling</span> hyper v0.13.10',
  '     <span class="orange">Compiling</span> zip v0.5.11',
  '     <span class="orange">Compiling</span> nu-value-ext v0.28.0 (/workspace/nushell/crates/nu-value-ext)',
  '     <span class="orange">Compiling</span> nu-stream v0.28.0 (/workspace/nushell/crates/nu-stream)',
  '     <span class="orange">Compiling</span> calamine v0.17.0',
  '     <span class="orange">Compiling</span> nu-test-support v0.28.0 (/workspace/nushell/crates/nu-test-support)',
  '     <span class="orange">Compiling</span> nu-plugin v0.28.0 (/workspace/nushell/crates/nu-plugin)',
  '     <span class="orange">Compiling</span> nu-data v0.28.0 (/workspace/nushell/crates/nu-data)',
  '     <span class="orange">Compiling</span> nu-parser v0.28.0 (/workspace/nushell/crates/nu-parser)',
  '     <span class="orange">Compiling</span> nu_plugin_match v0.28.0 (/workspace/nushell/crates/nu_plugin_match)',
  '     <span class="orange">Compiling</span> nu_plugin_ps v0.28.0 (/workspace/nushell/crates/nu_plugin_ps)',
  '     <span class="orange">Compiling</span> nu_plugin_inc v0.28.0 (/workspace/nushell/crates/nu_plugin_inc)',
  '     <span class="orange">Compiling</span> nu_plugin_sys v0.28.0 (/workspace/nushell/crates/nu_plugin_sys)',
  '     <span class="orange">Compiling</span> hyper-tls v0.4.3',
  '     <span class="orange">Compiling</span> nu-engine v0.28.0 (/workspace/nushell/crates/nu-engine)',
  '     <span class="orange">Compiling</span> http-client v6.3.4',
  '     <span class="orange">Compiling</span> surf v1.0.3',
  '     <span class="orange">Compiling</span> surf v2.2.0',
  '     <span class="orange">Compiling</span> nu_plugin_post v0.28.0 (/workspace/nushell/crates/nu_plugin_post)',
  '     <span class="orange">Compiling</span> nu_plugin_fetch v0.28.0 (/workspace/nushell/crates/nu_plugin_fetch)',
  '     <span class="orange">Compiling</span> onig v6.1.1',
  '     <span class="orange">Compiling</span> syntect v4.5.0',
  '     <span class="orange">Compiling</span> git2 v0.13.17',
  '     <span class="orange">Compiling</span> shadow-rs v0.5.24',
  '     <span class="orange">Compiling</span> nu-command v0.28.0 (/workspace/nushell/crates/nu-command)',
  '     <span class="orange">Compiling</span> nu-cli v0.28.0 (/workspace/nushell/crates/nu-cli)',
  '     <span class="orange">Compiling</span> nu_plugin_textview v0.28.0 (/workspace/nushell/crates/nu_plugin_textview)',
  '     <span class="orange">Compiling</span> nu v0.28.0 (/workspace/nushell)',
  '      <span class="orange">Finished</span> release [optimized] target(s) in 18m 57s',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_fetch',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_inc',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_match',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_post',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_ps',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_sys',
  '    <span class="orange">Installing</span> /workspace/.cargo/bin/nu_plugin_core_textview',
  '     <span class="orange">Installed</span> package `nu v0.28.0 (/workspace/nushell)` (executables `nu`, `nu_plugin_core_fetch`, `nu_plugin_core_inc`, `nu_plugin_core_match`, `nu_plugin_core_post`, `nu_plugin_core_ps`, `nu_plugin_core_sys`, `nu_plugin_core_textview`)'
]

function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    const start = performance.now()

    requestAnimationFrame(tick)

    function tick(now: number) {
      if (now - start >= duration) {
        resolve()
      } else {
        requestAnimationFrame(tick)
      }
    }
  })
}

interface InputLine {
  type: 'input'
  id: number
  active: boolean
  message: string
}

interface OutputLine {
  type: 'output'
  id: number
  message: string
}

type Line = InputLine | OutputLine

const scrollPadding = 60

const StyledGitpodConsole = styled.div`
  font-family: 'SF Mono';
  font-size: 18px;
  line-height: 1.89;
  letter-spacing: -0.009em;
  color: rgba(18, 16, 12, 0.7);
  position: relative;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  width: 544px;
  height: 560px;
  background: linear-gradient(256.32deg, #fdfdfd 1.45%, #f8f8f8 89.31%);
  box-shadow: 0px 11px 39px #ffca64, 0px 17px 49px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding: 0 ${scrollPadding}px ${scrollPadding}px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  .buffer {
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    z-index: 1;
    position: sticky;
    top: 0;
    margin-left: -${scrollPadding}px;
    margin-right: -${scrollPadding}px;
    height: 72px;
    background: rgba(249, 249, 249, 0.9);
    backdrop-filter: blur(10px);
  }
  .titlebar::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 30px;
    left: 30px;
    border-radius: 50%;
    background: #e7e7e7;
  }
  .line-input-user,
  .orange {
    color: #fc8800;
  }
  .line-input-dir,
  .green {
    color: #57c700;
  }
  .line-input-prompt {
    color: #454545;
  }
  @keyframes blinking-cursor {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .line-input-cursor {
    display: none;
  }
  .line-input-active .line-input-cursor {
    display: inline-block;
    vertical-align: text-top;
    width: 12px;
    height: 21px;
    background-color: #12100c;
    animation-name: blinking-cursor;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`

const GitpodConsole: React.FunctionComponent<{}> = () => {
  const uuidRef = useRef(0)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  const [buffer, setBuffer] = React.useState<Line[]>([])

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)

        if (wrapperRef.current) {
          observer.unobserve(wrapperRef.current)
        }
      }
    })

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  React.useEffect(() => {
    if (!visible) {
      return
    }

    async function printInput(message: string) {
      const id = uuidRef.current++

      setBuffer((prev) => prev.concat({ id, type: 'input', message: '', active: true }))

      for (let i = 0; i <= message.length; i++) {
        await sleep(50)

        setBuffer((prev) =>
          prev.map((item) => {
            if (item.id === id) {
              return { ...item, message: message.slice(0, i), active: i > 0 && i === message.length ? false : true }
            }

            return item
          })
        )
      }
    }

    function printOutput(message: string) {
      setBuffer((prev) => prev.concat({ id: uuidRef.current++, type: 'output', message }))
    }

    async function run() {
      await printInput('Hello')

      await sleep(50)

      for (const line of output) {
        printOutput(line)

        await sleep(15)
      }

      printOutput(' ')
      printOutput('exit')
      printOutput('🤘 This task ran as a workspace prebuild.')
      printOutput('🎉 Well done on saving 3mins')
      printOutput(' ')

      await printInput('')
    }

    run()
  }, [visible])

  React.useLayoutEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo(0, wrapperRef.current.scrollHeight - wrapperRef.current.clientHeight)
    }
  }, [buffer])

  return (
    <StyledGitpodConsole ref={wrapperRef}>
      <div className="titlebar"></div>
      <code>
        <pre>
          <span className="buffer">
            {buffer.map((item) =>
              item.type === 'input' ? (
                <span className={`line-input ${item.active ? 'line-input-active' : ''}`} key={item.id}>
                  <span className="line-input-user">Gitpod</span> <span className="line-input-dir">/workspace/nushell</span>{' '}
                  <span className="line-input-prompt">$</span> <span dangerouslySetInnerHTML={{ __html: item.message }} />
                  <span className="line-input-cursor"></span>
                </span>
              ) : (
                <span className="line-output" key={item.id} dangerouslySetInnerHTML={{ __html: item.message }} />
              )
            )}
          </span>
        </pre>
      </code>
    </StyledGitpodConsole>
  )
}

const AnimationsPage: React.FunctionComponent<{}> = () => (
  <>
    <GitpodConsole />
  </>
)

export default AnimationsPage
