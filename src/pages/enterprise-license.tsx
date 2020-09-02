import React, { useState } from 'react'
import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import { borders, colors } from '../styles/variables'
import { countryList } from '../contents/license-key'
import { isEurope } from '../utils/helpers'
import { encode } from './contact'
import SubmissionSucess from '../components/SubmissionSucess'
import { Link } from 'gatsby'
const StyledEnterpriseLicensePage = styled.div`
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
    max-width: 780px;
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
      flex: 0 0 42%;
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

    h3 {
      font-weight: 400;
    }

    .btn-wrapper {
      display: flex;
      justify-content: center;
    }
  }

  .error {
    margin: 2rem 0;
    color: red;
  }
`

const EnterpriseLicensePage = () => {
  const yearlyPricesPerSeat = {
    eur: 216,
    usd: 240
  }
  const [state, setState] = useState<{
    firstName?: string
    lastName?: string
    email?: string
    seats?: string
    company?: string
    domain?: string
    address?: string
    postalCode?: string
    city?: string
    country?: string
    noOfEmployees?: string
    message?: string
    errorMessage?: string
    messageSent?: boolean
  }>({})
  const [total, setTotal] = useState(0)

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: ''
    })

    if (e.target.name === 'seats') {
      setTotal(isEurope ? parseInt(e.target.value) * yearlyPricesPerSeat.eur || 0 : parseInt(e.target.value) * yearlyPricesPerSeat.usd || 0)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!state.firstName) {
      setState({
        ...state,
        errorMessage: 'Please Enter Your First Name.'
      })
      return
    }

    if (!state.lastName) {
      setState({
        ...state,
        errorMessage: 'Please Enter Your Last Name.'
      })
      return
    }

    if (!state.seats) {
      setState({
        ...state,
        errorMessage: 'Please Enter Number of Seats'
      })
      return
    }

    if (!state.domain) {
      setState({
        ...state,
        errorMessage: 'Please Enter the Installation Domain Name'
      })
      return
    }

    if (!state.email) {
      setState({
        ...state,
        errorMessage: 'Please Enter a Valid Email'
      })
      return
    }

    if (!state.company) {
      setState({
        ...state,
        errorMessage: 'Please Enter a Company'
      })
      return
    }

    if (!state.domain) {
      setState({
        ...state,
        errorMessage: 'Please Enter the Installation Domain Name'
      })
      return
    }

    if (!state.address) {
      setState({
        ...state,
        errorMessage: 'Please Enter a Street Adress'
      })
      return
    }

    if (!state.postalCode) {
      setState({
        ...state,
        errorMessage: 'Please Enter a Postal Code'
      })
      return
    }

    if (!state.city) {
      setState({
        ...state,
        errorMessage: 'Please Enter a City Name'
      })
      return
    }

    if (!state.country) {
      setState({
        ...state,
        errorMessage: 'Please Enter your Country Name'
      })
      return
    }

    const form = e.target as HTMLFormElement
    fetch('/enterprise-license/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() =>
        setState({
          ...state,
          messageSent: true
        })
      )
      .catch((error) => alert(error))
  }

  return (
    <IndexLayout>
      <StyledEnterpriseLicensePage>
        <div className="row">
          {state.messageSent ? (
            <SubmissionSucess />
          ) : (
            <form
              className="pattern"
              method="POST"
              name="enterprise-license"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="enterprise-license" />
              <div style={{ visibility: 'hidden' }}>
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
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
                      <input
                        type="number"
                        placeholder="Seats"
                        name="seats"
                        aria-label={`x${
                          isEurope ? `${yearlyPricesPerSeat.eur}€` : `${yearlyPricesPerSeat.usd}`
                        } per user yearly for a seat`}
                        onChange={handleChange}
                      />
                      <div>x {isEurope ? `${yearlyPricesPerSeat.eur}€` : `${yearlyPricesPerSeat.usd}`} per user yearly</div>
                    </label>
                    <div className="order-total">
                      Order Total: <strong>{total}</strong>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <h3>What is the domain name of your Gitpod Self-Hosted installation?</h3>
                  <div className="label-container">
                    <label>
                      <input onChange={handleChange} name="domain" type="text" placeholder="e.g. gitpod.mycompany.com"/>
                    </label>
                  </div>
                    <p>The license key will be bound to this domain.</p>
                </div>
                <div className="entry">
                  <h3>Customer Information</h3>
                  <div className="label-container">
                    <label>
                      First Name
                      <input onChange={handleChange} name="firstName" type="text" />
                    </label>
                    <label>
                      Last Name
                      <input onChange={handleChange} name="lastName" type="text" />
                    </label>
                    <label>
                      Work Email
                      <input type="email" onChange={handleChange} name="email" />
                    </label>
                    <label>
                      Company
                      <input onChange={handleChange} name="company" type="text" />
                    </label>
                    <label>
                      Street Address
                      <input onChange={handleChange} name="address" type="text" />
                    </label>
                    <label>
                      Postal Code
                      <input onChange={handleChange} name="postalCode" type="text" />
                    </label>
                    <label>
                      City
                      <input onChange={handleChange} name="city" type="text" />
                    </label>
                    <label>
                      Country
                      <select name="country" onChange={handleChange}>
                        <option>Select</option>
                        {countryList.map((c, i) => (
                          <option value={c} key={i + c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <p>
                        Total Number of Employees <span>(optional)</span>
                      </p>
                      <select name="noOfEmployees" onChange={handleChange}>
                        <option>Select</option>
                        {['2-5', '6-20', '21-50', '51-250', '+250'].map((n, i) => (
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
                    <textarea name="message" onChange={handleChange}></textarea>
                  </label>
                </div>

                <div className="error">{state.errorMessage ? <p>{state.errorMessage}</p> : null}</div>

                <div className="btn-container">
                  <button type="submit" className="btn btn--cta">
                    Request Now
                  </button>
                </div>
              </div>
            </form>
          )}
          <div className="need-help">
            <h3>Do you have any questions? We’re happy to help.</h3>
            <div className="btn-wrapper">
              <a href="https://calendly.com/gitpod/sales" className="btn btn--cta">
                Schedule a Call
              </a>
              <Link to="/contact" className="btn">
                Write Us a Mail
              </Link>
            </div>
          </div>
        </div>
      </StyledEnterpriseLicensePage>
    </IndexLayout>
  )
}

export default EnterpriseLicensePage
