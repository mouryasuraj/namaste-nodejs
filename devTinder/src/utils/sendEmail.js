const {SendEmailCommand} = require("@aws-sdk/client-ses")
const sesClient  = require("../config/sesClient")


const createSendEmailCommand = (toAddress, fromAddress) =>{
    return new SendEmailCommand({
        Destination:{
            CcAddresses:[],
            ToAddresses:[toAddress]
        },
        Message:{
            Body:{
                Html:{
                    Charset:"UTF-8",
                    Data:"<h1>Hello from Backend server</h1>"
                },
                Text:{
                    Charset:"UTF-8",
                    Data:"This is a text from backend server"
                },
            },
            Subject:{
                Charset: "UTF-8",
                Data: "From Backend",
            }
        },
        Source:fromAddress,
        ReplyToAddresses:[]
    })
}

const run = async () =>{
    const SendEmailCommand = createSendEmailCommand("mouryasuraj6266444@gmail.com", "suraj@mouryasuraj.shop")

    try {

        return await sesClient.send(SendEmailCommand)
        
    } catch (error) {
        console.log("An error occured duing sending an email",error)
    }

}


module.exports = run

