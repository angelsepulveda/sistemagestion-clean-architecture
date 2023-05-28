import Application from './app'
import ServerBootstrap, { Bootstrap } from './bootstrap/server.bootstrap'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)

;(async () => {
   try {
      const resultServer = await serverBootstrap.initialize()
      console.log(resultServer)
   } catch (error) {
      console.log(error)
   }
})()
