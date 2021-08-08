const { RED, server } = require("./server")

server.listen(process.env.PORT || 1880)
RED.start()