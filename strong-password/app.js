function minimumNumber(n, password) {
  let min = 0;

  console.log(password.length);

  if (!/[\d]/.test(password)) {
    min++;
  }

  if (!/[A-Z]/.test(password)) {
    min++;
  }

  if (!/[a-z]/.test(password)) {
    min++;
  }
  if (!/[!@#$%^&*()--+]/.test(password)) {
    min++;
  }

  if (password.length < 6 && 6 - password.length > min) {
    return 6 - password.length;
  }

  return min;
}

minimumNumber(2, "2bbbb");
