import { JSEncrypt } from "../lib/JSEncrypt";

const filePublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgEWrR3frvq3N+BbfB8psI/5cpmGj9l5Jl239Y+bzSEMhaI/xTBg7yCciYlM2XmX5k71VG7Ziw+yBv7zcB5HymHsXcAhN4jXktoh3ZglRim98hUnLHL9oxeT+HhL+T0E+mAv9UdFE2qc2P+KjNJi0N81an39NXWdPyQnLS7F2AUPOElz7qtyOht46Lss1CSPTEwjCMXvhsuJR4vuGRIjhTX+9bdTIGUxXiw8tVqohXB+C39WszGsEUB59DLOSy3GsJ+stryanjFeo15v4Wm1lzS3xXB4g4bqH7VQsnazYyzDGJLEeD615qvFv56UoMFfG6nKNNYfdDV+Y9fDPg9gNHQIDAQAB';
const content = "B1zLPNer+qp94QTa4M7PDZpFUcE3tQZB9R6FYYMXxtn3UNAf3NIorbpAqyy9btPZFHGAaIu8ElWhjPThE9qi77Q4/rtEEvdhNjq8hPgQyIZFKN+OzpYuo8u+SAiIz4w5fPeLt8wqgOP4lD6KkBvRGwYj93+dNOVCfkq+TN6LdlMt3PWq1ufppqvx+8WIGNnyCr8CJYbDmYtgfNzgX7hg2QhbL4OMtXw1abITHWGAgNlbzpkLtX08MO0NDMa6v/2tN+GXxKAaTZ7TPg3dE/gdkOW5zIdlUR1d2pnaNJZA1/wYZhM3furPhAf2ZcEUCtwjkRMx1fcHWmQoGriyvkzXNQm0CBibA8sixk7PDdeIpx33WEY3bBTiEIzWxXQqXl137l9YuxwIlIybmTTIkgWS7aXhAsXE9aObzIEtFy8eMUjCUGvuIrX/LjFjKk9ZKPUOTTFGeBNfDpPt5vq+GpoXd5MTtFAZ590Lp1vIPcCFdnlt0FdJa9R0su7TeOtL8G7YAeA5/5hcRND6UXfohsZrE34QgXuABhHbAbwcFzKBEoxRgL1bqvYoZnHfKM/3h/DyXsOEB1Ud6WT3FwZc6kQgq4r/87Mxd/1an65nxgxZzH0pfbOzFkjptN6cH7kEr+AtaiVfoCYnHzbb4uOgMYlr+l1fGHZZ7IwrBQdUgdzpruVD0Qo2NgDgSCo6o6Ly4tBbPrKjm3F75KN0RVXGeYCTYf1y9CGAKdIgqWzS0qbeG2G1tHjtV5e6KnHMQim8jc8RbTkj9z0tGfGKXQ7RtPrx5jue4SreUt52cmoUtkYoiO2Dx5PFaGbN9qpuKpxZa2b4hY09PmK5Mlbnpe8IITeFwGSuiJyuDktqx80LE77Di/gY+M9NE9WKPgE6tldlb89ux9FvNn8fxTFhXRM/bE4WhOuxjN7dtv+8N8LCz1ilfqexfzLczjxeEPNO+Qe0A8KsUf7ZMITsgYyd/JferTPEJ9XDhKS6BBoHbfOjbWNNRRmX+NOD1HIBJKftagetc0CtFP7zTam49hqGJ9FaRTeG+TSosUDN5UkqPLnHWOlo475zSm9XB8Mlx6P/2qwcm2tHDNhaith/eng+pnQimzICvq6I0SREfUmpjPaMyP0QS+ZchQuMUr/tH7q5jjtuaIwP48Lxyu1fIWdbN8e583SYc4nSdURO726sQzklkF/qFhTrax072XdXiES9O5CPB0DVJbHvttIJMSlR3jt7ZYT7SncDRrTHX8X2YmyEIyO+riQQxxm9gV4xfqdmuAgAIlFAZ2qmRftX6yCgHrmi7yBaVZQq6Zsw0tJ4+WLIbn3Sjpk8LM+TjXfL91vv0MDsdeIIvxeISLJ42Nzlze2yHrqT9mT1C/cZUWeoRBORATfa3NaGMeb/LXESr7bx3Qbtpfyp/Te2JUUz3TKKAibElKlHJidGyHzCYVHmva8h8CEVnIMEhyF+pPKFNaAmuIKZylROp97qO6XxQm97v7cHGdfCg6LbsPrx00ckajSa1bfByW654oAEsFSCM7G9KLVobEoRCWDmYZIGwAIR5yl2pPLcI4e6mjgZZQZgUTTUS8EAqs3r7OoCnKOr6Sis/lxZph2opuPGQtlD7FUzlRfOYYNchhCOPcoUKs5fGHT2SjseOnN7eoQIx6jO4cHsNh1JU90qYV5Cs4hlnf1fXowWA/lPZV4svtu4x/n1Jc6f5pvPwCI=";
// const content = "DWOyi7rUl/RQ3PpYHkVV+sXOO1U3xzR6tbfs2mnhCqEp4fCsh6opij1VMe8qQgk41vX8vQ66paJiY/zbQqykG4RVc7u7u8A/mUy0fNVPRFvzg7Z/5T8FyMS7v1gspeKSOWIXHau4QV8ivlnqfp7qveHb+6PiNKiZ0FUgkx+lsSyDEFAyLw7Ps6CA//ZT+tPQuUUoS1BKyTq8RpbgnTuH1mGN0wJwR2xBdsiHT4rV3cwICXoHIvKgvMnP95sVOX1mvfklVXF2moBPG7/W73rlyWGYroTtvUrncj5RILj2SEEEqDqRdwCYzixEAU2vJPNW5y4lwUkTyKo8A4mF2dwgqwGz22bu2VGuJcOxsxov1WDg6ugFt4cnbhkNFfvKdZP+sgzrsNP2GEJ1Pt5O2kD+LT6EZ+bOpzHG6sUQ66NIItTFFiYVhpBFUqZXWoZDVQJ3TiDfJCIusxIx/q1OEYsn9V/v0m7NsHh2DcyX2ipogTHLoSUiUjh9cIAuAWelr3pH8vJrBcQYn80w4FjxrCjd5mA1tiq0pbFXLSG+nkpTHw9z4QKLqk6C3DmdnAmYeWujxM2XfhZHKjiNMTf01TP5TWZ7W+YWVLshNBlEG7HB9Ki9WGamtgNjPN0j+LBmt/RigPgHPjjyCYMxJd2m0R3P3BHdOtOdqHfUe8bQgMZMZFY0aTaA6C9pi/c/08nQz56zafT5kOBcHuj8/to5OY9wJNP+m7Y+0Qc9aWu0GbvnRCmmuiAu4tKCOxFBSaONzehaOBhBp9pK65RZYuYejxjbEnBLIsvKM357h57Wan2K9Usc40buDUGhOuTy147gp4ppBjVJNAyXrZ3lFrBag5xkI3J4lgSBZSI4E26xQhJsHlCS/gYKrDDNnvTSLwEiow/E/c6i8y158xrlhN1/BhlL2Go9xQEWSe3Pov3Lrw/IEA7wqDNuqmzw/a3+RhQi7YBaAMCm9lOTchhWSQfU9elRwGsGVtbp72F31yNXwuKaOEdt/9/RM3w/VgGWcVrw/qShHlrDro7rOZ06u1F+mtNWu7OXBo8bbARTkKiCQigBkV5wKcZPd5UbyxEhGmSWoU6ujgz0StLl1QiXnXUgSG+uAGpCyPZkvL8ANjx14Yev1BP+GplOSpt/+MikLkjHo2qvleHX/OOtTAgx3N08Ans/5apIyF73CU1p9Hhdvu9Sqbwg+zAFp8354SoyvD75ACv6OGrTNrRE+UYsU7Xx4jr3nMCZItZ2t21nUqVcV8rvtDeh7xUzv4Q8fLmfopAdYcOvli93pdKGsxnBDA529jtLe9HSNZvTe+SVIwFuAS79gO9AeFiblHfeAhhQnwN5dRybhwgu1j/8G3AP7bMJGds7sg==";
console.log('aaaa')

const publicFileSignKey = () => {
  return '-----BEGIN PUBLIC KEY-----' + filePublicKey + '-----END PUBLIC KEY-----';
}

// 新建JSEncrypt对象
let encryptor = new JSEncrypt();
// // 设置公钥
encryptor.setPublicKey(publicFileSignKey());

// console.log('xxxxxxx111'+ content)
// // 加密数据
const originData = encryptor.decryptLongPub(content)

// let decoder = new TextDecoder('utf-8');
// let decodedString = decoder.decode(originData);
// const decodedResult = new TextDecoder().decode(new Uint8Array(originData));
console.log('xxxxxxxxx', originData)