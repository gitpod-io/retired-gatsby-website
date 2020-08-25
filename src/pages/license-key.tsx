import React from 'react'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { borders, colors } from '../styles/variables'
import { countryList } from '../contents/license-key'

const StyledLicenseKeyPage = styled.div`
  form {
    padding: 5rem 0;

    .btn {
      transform: scale(1.05);

      &-container {
        text-align: center;
      }
    }
  }

  .pattern {
    &::after {
      height: 63%;
    }
  }

  .banner {
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }

  .entries {
    max-width: 760px;
    margin: 4rem auto;
    padding: 4rem;
    background: ${colors.white};
    border: ${borders.light};
  }

  .entry {
    margin-bottom: 5rem;
  }

  h3 {
    font-size: 2rem;
  }

  .label-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > * {
      flex: 0 0 40%;
      overflow: hidden;
    }

    @media (max-width: 720px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  input,
  textarea,
  select {
    margin-top: 1rem;
    padding: 1rem;
    border: ${borders.normal};
    border-radius: 3px;
  }

  select {
    max-width: 100%;

    @media (max-width: 720px) {
      max-width: 28rem;
    }
  }

  textarea {
    height: 220px;
  }

  .seats {
    flex-direction: row;
    align-items: baseline;

    input {
      width: 30%;
      margin-right: 1.5rem;
    }
  }

  .order-total {
    display: flex;
    justify-content: flex-end;

    strong {
      margin-left: 1.5rem;
    }
  }

  .need-help {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 10rem;

    .btn-wrapper {
      display: flex;
      justify-content: center;
    }
  }
`

const LicenseKeyPage = () => (
  <IndexLayout>
    <StyledLicenseKeyPage>
      <div className="row">
        <form className="pattern">
          <div className="banner">
            <h1>
              Request <strong>License Key</strong>
            </h1>
            <p>Please fill out your order to receive a license key for Gitpod Self-Hosted.</p>
          </div>

          <div className="entries">
            <div className="entry">
              <h3>How many seats would you like to purchase?</h3>
              <div className="label-container">
                <label className="seats">
                  <input type="text" placeholder="Seats" aria-label="x$240 per user yearly for a seat" />
                  <div>x$240 per user yearly</div>
                </label>
                <div className="order-total">
                  Order Total: <strong>$1200</strong>
                </div>
              </div>
            </div>
            <div className="entry">
              <h3>Customer Information</h3>
              <div className="label-container">
                <label>
                  First Name
                  <input type="text" />
                </label>
                <label>
                  Last Name
                  <input type="text" />
                </label>
                <label>
                  Work Email
                  <input type="text" />
                </label>
              </div>
            </div>
            <div className="entry">
              <h3>About Your Company</h3>
              <div className="label-container">
                <label>
                  Company
                  <input type="text" />
                </label>
                <label>
                  Street Address
                  <input type="text" />
                </label>
                <label>
                  City
                  <input type="text" />
                </label>
                <label>
                  Postal Code
                  <input type="text" />
                </label>
                <label>
                  Country
                  <select>
                    {countryList.map((c, i) => (
                      <option value={c} key={i + c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Total Number of Employees
                  <select>
                    {[10, 20, 30, 40, 50].map((n, i) => (
                      <option value={n} key={i + n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="entry">
              <h3>Other</h3>
              <label>
                <p>
                  Add personal message <span>(optional)</span>
                </p>
                <textarea></textarea>
              </label>
            </div>

            <div className="btn-container">
              <button type="submit" className="btn btn--cta">
                Request Now
              </button>
            </div>
          </div>
        </form>
        <div className="need-help">
          <h3>Do you have any questions? We’re happy to help.</h3>
          <div className="btn-wrapper">
            <a href="https://calendly.com/gitpod/sales" className="btn btn--cta">
              Schedule a Call
            </a>
            <a href="" className="btn">
              Write Us a Mail
            </a>
          </div>
        </div>
      </div>
    </StyledLicenseKeyPage>
  </IndexLayout>
)

export default LicenseKeyPage
