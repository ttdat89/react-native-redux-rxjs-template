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
  device_settings: {
    en: 'Device Settings'
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
  booking_nurse: {
    en: 'Booking Nurse'
  },
  health_vitals: {
    en: 'Health Vitals'
  },
  tele_advice: {
    en: 'Tele Advice'
  },
  fitness: {
    en: 'Fitness'
  },
  nutrition: {
    en: 'Nutrition'
  },
  massage: {
    en: 'Massage'
  },
  tele_fitness: {
    en: 'Tele Fitness'
  },
  lifelong_learning: {
    en: 'Lifelong Learning'
  },
  e_learning: {
    en: 'E-learning'
  },
  personal_finance: {
    en: 'Personal Finance'
  },
  retirement_income: {
    en: 'Retirement Income'
  },
  medical_coverage: {
    en: 'Medical Coverage'
  },
  social_connectivity: {
    en: 'Social Connectivity'
  },
  interest_group: {
    en: 'Interest Group'
  },
  grooming: {
    en: 'Grooming'
  },
  skincare: {
    en: 'Skincare'
  },
  haircare: {
    en: 'Haircare'
  },
  fashion: {
    en: 'Fashion'
  },
  waiting_request: {
    en: 'Waiting Request'
  },
  no_booking: {
    en: 'No Booking'
  },
  duration: {
    en: 'Duration'
  },
  services: {
    en: 'Services'
  },
  book_services: {
    en: 'Book Services'
  },
  done_requests: {
    en: 'Done Requests'
  },
  confirm_info: {
    en: 'Confirm Info'
  }
}

export function getText(key, language) {
  return LocalizedTexts[key][language]
}