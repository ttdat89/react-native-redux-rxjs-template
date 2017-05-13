/**
 * Created by Dat Tran on 2/8/17.
 */

export const LocalizedTexts = {
  get_started: {
    en: 'Get Started',
    vi: 'Bắt đầu'
  },
  create_account: {
    en: 'Create Account',
    vi: 'Tạo tài khoản'
  },
  first_name: {
    en: 'First Name',
    vi: 'Tên'
  },
  last_name: {
    en: 'Last Name'
  },
  email: {
    en: 'Email'
  },
  confirm_email: {
    en: 'Confirm Email'
  },
  password: {
    en: 'Password'
  },
  confirm_password: {
    en: 'Confirm Password'
  },
  continue_button: {
    en: 'Continue'
  },
  please_wait: {
    en: 'Please Wait'
  },
  main_menu: {
    en: 'Main Menu'
  },
  profile: {
    en: 'Profile'
  },
  log_out: {
    en: 'Log Out'
  },
  home: {
    en: 'Home'
  },
  health: {
    en: 'Health'
  },
  massage: {
    en: 'Massage'
  },
  duration: {
    en: 'Duration'
  },
  services: {
    en: 'Services'
  },
  confirm_info: {
    en: 'Confirm Info'
  }
}

export function getText(key, language) {
  return LocalizedTexts[key][language]
}