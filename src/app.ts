import express, { Application } from 'express'

import routerHealth from './helpers/health'

class App {
   readonly expressApp: Application

   constructor() {
      this.expressApp = express()
      this.mountHealthCheck()
   }

   mountHealthCheck(): void {
      this.expressApp.use('/', routerHealth)
   }
}

export default new App().expressApp
