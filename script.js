const button = document.getElementById("securityButton");
const message = document.getElementById("securityMessage");

if (button && message) {
  button.addEventListener("click", function () {
    message.textContent =
      "Security review: HTTPS access, S3 access permissions, IAM configuration, and CloudFront distribution.";
  });
}