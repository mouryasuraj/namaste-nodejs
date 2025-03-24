/*

//Thread Pool in Libuv


1. Whenever there is file reading, js engine offload it to libuv and libuv used thread to read the file
2. There is 4 by default thread in libuv but if simultaneously there is a fifth task then it have to wait to free the thread then only the fifth task will execute.
3. We can increase the UV_THREAD_POOL size by storing it into a env 
    process.env.UV_THREADPOOL_SIZE = 2;



*/