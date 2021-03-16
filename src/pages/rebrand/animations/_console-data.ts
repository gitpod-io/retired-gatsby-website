export const data = `gitpod /workspace/nushell $ cargo install --path . --features=stable
  Blocking waiting for file lock on package cache
Installing nu v0.28.0 (/workspace/nushell)
  Blocking waiting for file lock on package cache
  Updating crates.io index
Downloading crates ...
Downloaded byteorder v1.4.3
Downloaded http-client v6.3.5
Downloaded typenum v1.13.0
Downloaded openssl v0.10.33
Downloaded regex-syntax v0.6.23
Downloaded openssl-sys v0.9.61
Downloaded regex v1.4.5
Downloaded ptree v0.3.2
Downloaded byte-unit v4.0.10
Downloaded directories v3.0.1
Downloaded tracing-attributes v0.1.15
Downloaded syn v1.0.64
 Compiling libc v0.2.88
 Compiling proc-macro2 v1.0.24
 Compiling unicode-xid v0.2.1
 Compiling syn v1.0.64
 Compiling autocfg v1.0.1
 Compiling cfg-if v1.0.0
 Compiling memchr v2.3.4
 Compiling version_check v0.9.2
 Compiling serde_derive v1.0.124
 Compiling serde v1.0.124
 Compiling value-bag v1.0.0-alpha.6
 Compiling log v0.4.14
 Compiling pkg-config v0.3.19
 Compiling lazy_static v1.4.0
 Compiling itoa v0.4.7
 Compiling byteorder v1.4.3
 Compiling bitflags v1.2.1
 Compiling ryu v1.0.5
 Compiling futures-core v0.3.13
 Compiling regex-syntax v0.6.23
 Compiling slab v0.4.2
 Compiling cfg-if v0.1.10
 Compiling pin-project-lite v0.2.6
 Compiling serde_json v1.0.64
 Compiling hashbrown v0.9.1
 Compiling futures-io v0.3.13
 Compiling fnv v1.0.7
 Compiling proc-macro-hack v0.5.19
 Compiling typenum v1.13.0
 Compiling pin-utils v0.1.0
 Compiling unicode-width v0.1.8
 Compiling getrandom v0.2.2
 Compiling futures v0.1.31
 Compiling futures-sink v0.3.13
 Compiling ppv-lite86 v0.2.10
 Compiling termcolor v1.1.2
 Compiling typed-arena v1.7.0
 Compiling dtoa v0.4.7
 Compiling proc-macro-nested v0.1.7
 Compiling once_cell v1.7.2
 Compiling matches v0.1.8
 Compiling percent-encoding v2.1.0
 Compiling nu-ansi-term v0.28.0 (/workspace/nushell/crates/nu-ansi-term)
 Compiling bytes v0.5.6
 Compiling futures-task v0.3.13
 Compiling utf8-width v0.1.4
 Compiling scopeguard v1.1.0
 Compiling glob v0.3.0
 Compiling tinyvec_macros v0.1.0
 Compiling either v1.6.1
 Compiling pin-project-lite v0.1.12
 Compiling remove_dir_all v0.5.3
 Compiling dunce v1.0.1
 Compiling fastrand v1.4.0
 Compiling cache-padded v1.1.1
 Compiling parking v2.0.0
 Compiling waker-fn v1.1.0
 Compiling opaque-debug v0.3.0
 Compiling event-listener v2.5.1
 Compiling subtle v2.4.0
 Compiling base64 v0.13.0
 Compiling bytes v1.0.1
 Compiling async-task v4.0.3
 Compiling openssl-probe v0.1.2
 Compiling vec-arena v1.0.0
 Compiling getrandom v0.1.16
 Compiling atomic-waker v1.0.0
 Compiling encoding_rs v0.8.28
 Compiling rayon-core v1.9.0
 Compiling crc32fast v1.2.1
 Compiling adler32 v1.2.0
 Compiling curl v0.4.35
 Compiling foreign-types-shared v0.1.1
 Compiling futures-core-preview v0.3.0-alpha.19
 Compiling async-trait v0.1.48
 Compiling same-file v1.0.6
 Compiling encoding_index_tests v0.1.4
 Compiling const_fn v0.4.5
 Compiling openssl v0.10.33
 Compiling arrayvec v0.4.12
 Compiling futures-sink-preview v0.3.0-alpha.19
 Compiling cpuid-bool v0.2.0
 Compiling cpuid-bool v0.1.2
 Compiling smallvec v1.6.1
 Compiling unicode-xid v0.0.4
 Compiling httparse v1.3.5
 Compiling futures-io-preview v0.3.0-alpha.19
 Compiling lexical-core v0.7.5
 Compiling nodrop v0.1.14
 Compiling serde v0.8.23
 Compiling pin-project-internal v0.4.27
 Compiling native-tls v0.2.7
 Compiling ucd-trie v0.1.3
 Compiling static_assertions v1.1.0
 Compiling quote v0.3.15
 Compiling try-lock v0.2.3
 Compiling quick-error v1.2.3
 Compiling anyhow v1.0.38
 Compiling unicode-segmentation v1.7.1
 Compiling arrayvec v0.5.2
 Compiling isahc v0.9.14
 Compiling httpdate v0.3.2
 Compiling bit-vec v0.6.3
 Compiling data-encoding v2.3.2
 Compiling vec_map v0.8.2
 Compiling mime v0.3.16
 Compiling tower-service v0.3.1
 Compiling ansi_term v0.12.1
 Compiling ansi_term v0.11.0
 Compiling safemem v0.3.3
 Compiling http-types v2.10.0
 Compiling strsim v0.8.0
 Compiling query_interface v0.3.5
 Compiling doc-comment v0.3.3
 Compiling fixedbitset v0.2.0
 Compiling isahc v0.7.6
 Compiling lazy_static v0.2.11
 Compiling utf8parse v0.1.1
 Compiling endian-type v0.1.2
 Compiling infer v0.2.3
 Compiling peresil v0.3.0
 Compiling sysinfo v0.16.4
 Compiling xml-rs v0.8.3
 Compiling rust-ini v0.13.0
 Compiling fs_extra v1.2.0
 Compiling nom v1.2.4
 Compiling xmlparser v0.13.3
 Compiling utf8parse v0.2.0
 Compiling lazycell v1.3.0
 Compiling void v1.0.2
 Compiling std_prelude v0.2.12
 Compiling result v1.0.0
 Compiling umask v1.0.0
 Compiling filesize v0.2.0
 Compiling shell-words v1.0.0
 Compiling wild v2.0.4
 Compiling pretty-hex v0.2.1
 Compiling htmlescape v0.3.1
 Compiling futures-timer v3.0.2
 Compiling instant v0.1.9
 Compiling num-traits v0.2.14
 Compiling num-integer v0.1.44
 Compiling indexmap v1.6.2
 Compiling num-bigint v0.2.6
 Compiling num-bigint v0.3.2
 Compiling num-rational v0.2.4
 Compiling crossbeam-utils v0.8.3
 Compiling num-complex v0.2.4
 Compiling num-iter v0.1.42
 Compiling memoffset v0.6.1
 Compiling rayon v1.5.0
 Compiling generic-array v0.14.4
 Compiling proc-macro-error-attr v1.0.4
 Compiling proc-macro-error v1.0.4
 Compiling standback v0.2.15
 Compiling unicase v2.6.0
 Compiling time v0.2.25
 Compiling cookie v0.14.4
 Compiling nom v5.1.2
 Compiling error-chain v0.12.4
 Compiling tracing-core v0.1.17
 Compiling regex-automata v0.1.9
 Compiling crossbeam-utils v0.6.6
 Compiling futures-channel v0.3.13
 Compiling pretty v0.5.2
 Compiling unicode-bidi v0.3.4
 Compiling form_urlencoded v1.0.1
 Compiling byte-unit v4.0.10
 Compiling lock_api v0.4.2
 Compiling tinyvec v1.1.1
 Compiling itertools v0.10.0
 Compiling concurrent-queue v1.2.2
 Compiling async-mutex v1.4.0
 Compiling async-lock v2.3.0
 Compiling http v0.2.3
 Compiling miniz_oxide v0.3.7
 Compiling foreign-types v0.3.2
 Compiling walkdir v2.3.1
 Compiling encoding-index-singlebyte v1.20141219.5
 Compiling encoding-index-korean v1.20141219.5
 Compiling encoding-index-japanese v1.20141219.5
 Compiling encoding-index-simpchinese v1.20141219.5
 Compiling encoding-index-tradchinese v1.20141219.5
 Compiling futures-channel-preview v0.3.0-alpha.19
 Compiling synom v0.11.3
 Compiling nibble_vec v0.1.0
 Compiling pest v2.1.3
 Compiling humantime v1.3.0
 Compiling heck v0.3.2
 Compiling bit-set v0.5.2
 Compiling serde_test v0.8.23
 Compiling line-wrap v0.1.1
 Compiling tint v1.0.1
 Compiling vte v0.3.3
 Compiling sxd-document v0.3.2
 Compiling meval v0.2.0
 Compiling roxmltree v0.14.0
 Compiling path_abs v0.5.1
 Compiling sluice v0.5.4
 Compiling crossbeam-channel v0.3.9
 Compiling spinning_top v0.2.2
 Compiling async-channel v1.6.1
 Compiling unicode-normalization v0.1.17
 Compiling rust-embed-utils v5.1.0
 Compiling http-body v0.3.1
 Compiling encoding v0.2.33
 Compiling sluice v0.4.2
 Compiling syn v0.11.11
 Compiling radix_trie v0.2.1
 Compiling linked-hash-map v0.3.0
 Compiling strip-ansi-escapes v0.1.0
 Compiling semver-parser v0.10.2
 Compiling sxd-xpath v0.4.2
 Compiling quote v1.0.9
 Compiling iovec v0.1.4
 Compiling time v0.1.44
 Compiling num_cpus v1.13.0
 Compiling socket2 v0.3.19
 Compiling net2 v0.2.37
 Compiling dirs-sys-next v0.1.2
 Compiling atty v0.2.14
 Compiling dirs-sys v0.3.5
 Compiling term_size v0.3.2
 Compiling parking_lot_core v0.8.3
 Compiling fs2 v0.4.3
 Compiling terminal_size v0.1.16
 Compiling jobserver v0.1.21
 Compiling aho-corasick v0.7.15
 Compiling futures-lite v1.11.3
 Compiling csv-core v0.1.10
 Compiling content_inspector v0.2.4
 Compiling quick-xml v0.21.0
 Compiling nix v0.20.0
 Compiling flume v0.9.2
 Compiling flate2 v1.0.14
 Compiling idna v0.2.2
 Compiling quick-xml v0.19.0
 Compiling codepage v0.1.1
 Compiling semver v0.11.0
 Compiling num-traits v0.1.43
 Compiling ordered-float v1.1.1
 Compiling derive_is_enum_variant v0.1.1
 Compiling bytes v0.4.12
 Compiling rand_core v0.6.2
 Compiling uuid v0.8.2
 Compiling dashmap v4.0.2
 Compiling nb-connect v1.0.3
 Compiling dirs-next v2.0.0
 Compiling directories-next v2.0.0
 Compiling rand_core v0.5.1
 Compiling textwrap v0.11.0
 Compiling directories v3.0.1
 Compiling dirs v3.0.1
 Compiling parking_lot v0.11.1
 Compiling cc v1.0.67
 Compiling crossbeam-channel v0.5.0
 Compiling regex v1.4.5
 Compiling crossbeam-epoch v0.9.3
 Compiling async-executor v1.4.0
 Compiling blocking v1.0.2
 Compiling mime_guess v2.0.3
 Compiling digest v0.9.0
 Compiling cipher v0.2.5
 Compiling universal-hash v0.4.0
 Compiling block-buffer v0.9.0
 Compiling crypto-mac v0.10.0
 Compiling aead v0.3.2
 Compiling ctrlc v3.1.8
 Compiling http v0.1.21
 Compiling rand_chacha v0.3.0
 Compiling shellexpand v2.1.0
 Compiling term v0.7.0
 Compiling rand_chacha v0.2.2
 Compiling clap v2.33.3
 Compiling crossbeam-deque v0.8.0
 Compiling parse-zoneinfo v0.3.0
 Compiling libz-sys v1.1.2
 Compiling openssl-sys v0.9.61
 Compiling libgit2-sys v0.12.18+1.1.0
 Compiling libnghttp2-sys v0.1.6+1.43.0
 Compiling curl-sys v0.4.41+curl-7.75.0
 Compiling bzip2-sys v0.1.10+1.0.8
 Compiling onig_sys v69.6.0
 Compiling ansi_colours v1.0.2
 Compiling nu-table v0.28.0 (/workspace/nushell/crates/nu-table)
 Compiling serde-hjson v0.9.1
 Compiling fancy-regex v0.3.5
 Compiling eml-parser v0.1.2
 Compiling titlecase v1.1.0
 Compiling Inflector v0.11.4
 Compiling console v0.13.0
 Compiling aes-soft v0.6.4
 Compiling ctr v0.6.0
 Compiling polyval v0.4.5
 Compiling sha2 v0.9.3
 Compiling hmac v0.10.1
 Compiling num-format v0.4.0
 Compiling rand v0.8.3
 Compiling rand v0.7.3
 Compiling ctor v0.1.19
 Compiling derive-new v0.5.9
 Compiling futures-macro v0.3.13
 Compiling thiserror-impl v1.0.24
 Compiling pin-project-internal v1.0.5
 Compiling tracing-attributes v0.1.15
 Compiling async-attributes v1.1.2
 Compiling time-macros-impl v0.1.1
 Compiling smart-default v0.6.0
 Compiling async-recursion v0.3.2
 Compiling rust-embed-impl v5.9.0
 Compiling chrono-tz v0.5.3
 Compiling aes v0.6.0
 Compiling getset v0.1.1
 Compiling bat v0.17.1
 Compiling ghash v0.3.1
 Compiling hkdf v0.10.0
 Compiling num v0.2.1
 Compiling tempfile v3.2.0
 Compiling thiserror v1.0.24
 Compiling pin-project v1.0.5
 Compiling time-macros v0.1.1
 Compiling rust-embed v5.9.0
 Compiling pin-project v0.4.27
 Compiling aes-gcm v0.8.0
 Compiling hamcrest2 v0.3.0
 Compiling which v4.0.2
 Compiling ical v0.7.0
 Compiling tokio-io v0.1.13
 Compiling mio v0.6.23
 Compiling polling v2.0.2
 Compiling kv-log-macro v1.0.7
 Compiling tracing v0.1.25
 Compiling users v0.11.0
 Compiling want v0.3.0
 Compiling rustyline v8.0.0
 Compiling env_logger v0.7.1
 Compiling serde_test v1.0.124
 Compiling chrono v0.4.19
 Compiling toml v0.5.8
 Compiling codespan-reporting v0.11.1
 Compiling nu-source v0.28.0 (/workspace/nushell/crates/nu-source)
 Compiling serde_bytes v0.11.5
 Compiling url v2.2.1
 Compiling serde_urlencoded v0.7.0
 Compiling bstr v0.2.15
 Compiling serde_qs v0.7.2
 Compiling serde-value v0.6.0
 Compiling rust_decimal v0.10.2
 Compiling bincode v1.3.1
 Compiling serde_ini v0.2.0
 Compiling futures-util v0.3.13
 Compiling futures-util-preview v0.3.0-alpha.19
 Compiling async-io v1.3.1
 Compiling tokio v0.2.25
 Compiling tracing-futures v0.2.5
 Compiling pretty_env_logger v0.4.0
 Compiling petgraph v0.5.1
 Compiling linked-hash-map v0.5.4
 Compiling plist v1.1.0
 Compiling bigdecimal v0.2.0
 Compiling serde_urlencoded v0.6.1
 Compiling globset v0.4.6
 Compiling csv v1.1.6
 Compiling futures-executor-preview v0.3.0-alpha.19
 Compiling yaml-rust v0.4.5
 Compiling nu-json v0.28.0 (/workspace/nushell/crates/nu-json)
 Compiling futures-executor v0.3.13
 Compiling async-global-executor v2.0.2
 Compiling tokio-util v0.3.1
 Compiling tokio-tls v0.3.1
 Compiling futures-preview v0.3.0-alpha.19
 Compiling serde_yaml v0.8.17
 Compiling config v0.10.1
 Compiling futures v0.3.13
 Compiling h2 v0.2.7
 Compiling async-std v1.9.0
 Compiling futures_codec v0.4.1
 Compiling nu-errors v0.28.0 (/workspace/nushell/crates/nu-errors)
 Compiling ptree v0.3.2
 Compiling dtparse v1.2.0
 Compiling nu-protocol v0.28.0 (/workspace/nushell/crates/nu-protocol)
 Compiling bzip2 v0.3.3
 Compiling ichwh v0.3.4
 Compiling zip v0.5.11
 Compiling hyper v0.13.10
 Compiling nu-value-ext v0.28.0 (/workspace/nushell/crates/nu-value-ext)
 Compiling nu-stream v0.28.0 (/workspace/nushell/crates/nu-stream)
 Compiling calamine v0.17.0
 Compiling nu-test-support v0.28.0 (/workspace/nushell/crates/nu-test-support)
 Compiling onig v6.1.1
 Compiling nu-plugin v0.28.0 (/workspace/nushell/crates/nu-plugin)
 Compiling nu-data v0.28.0 (/workspace/nushell/crates/nu-data)
 Compiling nu-parser v0.28.0 (/workspace/nushell/crates/nu-parser)
 Compiling syntect v4.5.0
 Compiling nu_plugin_ps v0.28.0 (/workspace/nushell/crates/nu_plugin_ps)
 Compiling nu_plugin_sys v0.28.0 (/workspace/nushell/crates/nu_plugin_sys)
 Compiling nu_plugin_match v0.28.0 (/workspace/nushell/crates/nu_plugin_match)
 Compiling nu_plugin_inc v0.28.0 (/workspace/nushell/crates/nu_plugin_inc)
 Compiling nu-engine v0.28.0 (/workspace/nushell/crates/nu-engine)
 Compiling hyper-tls v0.4.3
 Compiling surf v1.0.3
 Compiling http-client v6.3.5
 Compiling nu_plugin_post v0.28.0 (/workspace/nushell/crates/nu_plugin_post)
 Compiling surf v2.2.0
 Compiling nu_plugin_fetch v0.28.0 (/workspace/nushell/crates/nu_plugin_fetch)
 Compiling git2 v0.13.17
 Compiling shadow-rs v0.5.24
 Compiling nu-command v0.28.0 (/workspace/nushell/crates/nu-command)
 Compiling nu-cli v0.28.0 (/workspace/nushell/crates/nu-cli)
 Compiling nu_plugin_textview v0.28.0 (/workspace/nushell/crates/nu_plugin_textview)
 Compiling nu v0.28.0 (/workspace/nushell)
  Finished release [optimized] target(s) in 15m 42s
Installing /workspace/.cargo/bin/nu
Installing /workspace/.cargo/bin/nu_plugin_core_fetch
Installing /workspace/.cargo/bin/nu_plugin_core_inc
Installing /workspace/.cargo/bin/nu_plugin_core_match
Installing /workspace/.cargo/bin/nu_plugin_core_post
Installing /workspace/.cargo/bin/nu_plugin_core_ps
Installing /workspace/.cargo/bin/nu_plugin_core_sys
Installing /workspace/.cargo/bin/nu_plugin_core_textview
 Installed package \`nu v0.28.0 (/workspace/nushell)\` (executables \`nu\`, \`nu_plugin_core_fetch\`, \`nu_plugin_core_inc\`, \`nu_plugin_core_match\`, \`nu_plugin_core_post\`, \`nu_plugin_core_ps\`, \`nu_plugin_core_sys\`, \`nu_plugin_core_textview\`)
exit

🍌 This task ran as part of a workspace prebuild.
🎉 You just saved 15 minutes of watching your code build.

Welcome to Nushell 0.28.0 (type 'help' for more info)
/workspace/nushell(main)>`
