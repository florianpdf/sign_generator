import React from 'react';
import TextField from '@material-ui/core/TextField';
import MuiPhoneNumber from 'material-ui-phone-number';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputAdornment from '@material-ui/core/InputAdornment';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';

import Grid from '@material-ui/core/Grid';

const style = {
  wildColor: "#F55C5C"
}

const data = {
  schoolName: 'wildcodeschool',
  domain: '.com'
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  handleChange(e, key) {
    this.props.getData(data)
    let value;
    if (key === 'phone-number') {
      value = e
    } else {
      value = e.target.value
      if (key === 'firstName' || key === 'lastName') {
        data[key] = this.capitalizeFirstLetter(value)
        this.setState({
          [key]: value.toLowerCase()
        })
      }
    }
    data[key] = value
  }

  render() {
    return (
      <form autoComplete="off">
        <Grid container spacing={10} justify="center">
          <Grid item lg={4}>
            <TextField
              id="firstname"
              label="Your firstName"
              fullWidth
              placeholder="John"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
                      style={{ color: style.wildColor }}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={e => this.handleChange(e, "firstName")}
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              id="lastname"
              label="Your lastname"
              fullWidth
              placeholder="Doe"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
                      style={{ color: style.wildColor }}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={e => this.handleChange(e, "lastName")}
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              id="compagny-position"
              label="Your Position in the compagny"
              fullWidth
              placeholder="An unidentified person"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon
                      style={{ color: style.wildColor }}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={e => this.handleChange(e, "compagny-position")}
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              id="email"
              label="Your email"
              fullWidth
              placeholder="john.doe@wildcodeschool.com"
              value={this.state.firstName !== '' ? `${this.state.firstName}.${this.state.lastName}@${data.schoolName}${data.domain}` : null}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon
                      style={{ color: style.wildColor }}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={e => this.handleChange(e, "email")}
            />
          </Grid>
          <Grid item lg={4}>
            <MuiPhoneNumber
              id="phone-number"
              label="Phone Number"
              value="gb"
              defaultCountry={'gb'}
              onlyCountries={['de', 'be', 'es', 'fr', 'it', 'pt', 'gb', 'nl']}
              fullWidth
              placeholder="0 00 00 00"
              onChange={e => this.handleChange(e, "phone-number")}
            />
          </Grid>
          <Grid item lg={4}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="locale"
              fullWidth
              onChange={e => this.handleChange(e, "locale")}
              startAdornment={
                <LanguageIcon
                  style={{ color: style.wildColor }}
                />
              }
            >
              <MenuItem value={'en'} >English</MenuItem>
              <MenuItem value={'fr'}>French</MenuItem>
              <MenuItem value={'be'}>French Belgium</MenuItem>
              <MenuItem value={'de'}>German</MenuItem>
              <MenuItem value={'sp'}>Spainich</MenuItem>
              <MenuItem value={'pt'}>Portuguese</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={6}>
            <TextField
              id="meetup-link"
              label="Your meetup group link (optional)"
              fullWidth
              placeholder='https://www.meetup.com/Wild-Code-School-La-Loupe'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EventIcon
                      style={{ color: style.wildColor }}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={e => this.handleChange(e, "meetup-link")}
            />
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default Form