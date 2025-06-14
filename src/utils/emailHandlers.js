// Email handler functions for Dean Callan PM website

export const handlePayRentClick = () => {
  window.open('https://deancallanco.appfolio.com/connect/users/sign_in?a=cw&utm_source=apmsites_v3&utm_campaign=pay_rent_button', '_blank');
};

export const handleMaintenanceClick = () => {
  window.location.href = 'mailto:dccpm@deancallan.com?subject=Maintenance Request&body=Please describe your maintenance issue and include your property address.';
};

export const handleContactClick = () => {
  window.location.href = 'mailto:gcalley@deancallan.com?subject=General Inquiry&body=Hello, I would like to inquire about your property management services.';
};