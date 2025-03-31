/*

// Creating a server

1. Server can be both hardware and software
2. Suppose server is a hardware and we need to access the some thing like files and some data from that hardware then how can we achieve that, we will run an application on that hardware that will handle all the coming request and then we can communicate to that server.
3. EC2(Elastic Compute Cloud) - EC2 is an aws service. basically it is a server aws is provided
4. IP - Internet Protocol - There is an address of every device called IP and its unique

5. Client-Server Architecture:
    a. socket - socket is an endpoint for communication betweeen two computers over a network. It allows devices to send and receives data in real-time.
    b. user request from client an socket connection open and after response it will be closed and for new request new socket connection will be open.
    c. Socket makes an TCP/IP connection
    d. So, client make an request before its proceding to the server, first it will go to DNS server and check for IP and then its will maker and server and it will send and receive data in packets

6. Socket vs Websockets
    1. Socket:
        a. Socket is like one time request and response after that socket connection will be closed.
    2. Websocket:
        a. In websocket connection will be remain for sometime.







Questions:

1. What is server and how do we use it?
2. What is HTTP server
3. What is FTP server
4. What is SMTP server
5. What is packets
--> 1. A packet is a small unit of data that is sent over a network. When you send or receive data over the internet, it is broken into smaller packets, transmitter separately and then reassembled at the destination.

2. Why do we use packets:
    a. sending large amount of data at one slow down the network
    b. sending in packets make process faster, reliable and efficient
    c. if one packets is lost, only that packet needs to be retransmitted, not an enter data
3. How Packets Work?
📌 Example: Sending an Email
1️⃣ You send an email (large data).
2️⃣ The email is divided into multiple packets.
3️⃣ Each packet is labeled with a sequence number.
4️⃣ Packets travel through different routes across the network.
5️⃣ At the receiver’s end, packets are reassembled in order.
6️⃣ If a packet is missing, the system requests a resend.
4. Packet Structure (What’s Inside a Packet?)
A packet contains three parts:
1️⃣ Header – Contains metadata (source, destination, sequence number).
2️⃣ Payload – The actual data being transmitted.
3️⃣ Trailer – Used for error detection and correction.


6. What is stream and buffer in nodejs?
--> 

In Node.js, Streams and Buffers are used to handle large amounts of data efficiently, especially when working with files, network requests, or real-time data processing.

🔹 What is a Buffer?
A Buffer is a temporary storage area in memory that holds binary data before it is processed.

🔹 Think of a Buffer like: A bucket where data is collected before it is used.

🔹 Why Do We Need Buffers?
Node.js processes data in chunks, not all at once.

Some data (like videos, images, or large files) can’t be processed immediately, so they are temporarily stored in a buffer.

Buffers help handle binary data efficiently.

🔹 Example of a Buffer in Node.js
const buffer = Buffer.from("Hello");
console.log(buffer); // Output: <Buffer 48 65 6c 6c 6f>
console.log(buffer.toString()); // Output: Hello
✔ The Buffer converts text into binary format (Hexadecimal values).
✔ toString() converts it back to readable text.

🔹 What is a Stream?
A Stream is a way to handle continuous data flow in Node.js.
Instead of loading entire data into memory, streams process data in small chunks.

🔹 Think of a Stream like: A water pipe where data flows continuously, instead of storing all water in a bucket first.

🔹 Why Do We Need Streams?
Handling large files without loading them fully into memory.

Efficient memory usage (saves RAM).

Used in file reading/writing, video streaming, and network communication.

🔹 Types of Streams in Node.js
✔ Readable Streams – Used for reading data (e.g., reading a file).
✔ Writable Streams – Used for writing data (e.g., writing to a file).
✔ Duplex Streams – Both read and write (e.g., network sockets).
✔ Transform Streams – Used for modifying data while reading/writing (e.g., compression).

🔹 Example of a Readable Stream
const fs = require("fs");

const stream = fs.createReadStream("file.txt", { encoding: "utf8" });

stream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
});

stream.on("end", () => {
    console.log("Finished reading the file.");
});
✔ Reads file in chunks instead of loading it fully into memory.

🔹 Buffer vs. Stream: Key Differences
Feature	Buffer	Stream
Data Handling	Loads entire data at once	Processes data in chunks
Memory Usage	High (if large data)	Efficient (low memory usage)
Speed	Can be slow for large files	Faster for large files
Use Case	Small data (e.g., image processing)	Large data (e.g., video streaming)
🔹 Real-World Example
📌 Buffer: You download an image completely, then open it.
📌 Stream: You watch a YouTube video while it’s still loading in parts.


8. What is Port?
🔹 What is a Port?
A port is a logical communication endpoint used in networking to differentiate between multiple services running on a device. It allows multiple applications to communicate over the internet or a local network using the same IP address but different ports.

Think of it like a house with multiple doors:

The IP address is the house's address.

The ports are the different doors for different purposes (main entrance, garage, backdoor, etc.).

Each port is identified by a port number (0–65535).

0–1023	Well-Known Ports	Reserved for standard services (HTTP, HTTPS, FTP, SMTP, etc.)
1024–49151	Registered Ports	Used by software applications (MySQL, PostgreSQL, Docker, etc.)
49152–65535 - Dynamic/Ephemeral - Ports	Temporarily assigned for short-lived connections

How to check open ports:
    windows  - netstat an
    linux/ubuntu - netstat -tulnp
    
*/
