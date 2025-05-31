const allowedUserFieldUpdate = ["firstName","lastName","gender","photoUrl"]
const allowedSignUpFields = ["firstName","lastName","email","password","age","gender","photoUrl", "about"]
const allowedGenders = ["Male","Female","Others"]
const allowedLoginFields = ["email", "password"]
const allowedResetPasswordFields = ["currentPassword", "newPassword", "confirmPassword"]
const allowedSendStatusType = ["interested", "ignored"]
const allowedReviewStatusType = ["accepted", "rejected"]

const userPublicData = "firstName lastName age gender about skills photoUrl"


module.exports = {allowedGenders, allowedSignUpFields, allowedUserFieldUpdate, allowedLoginFields, allowedResetPasswordFields, allowedSendStatusType, allowedReviewStatusType, userPublicData}