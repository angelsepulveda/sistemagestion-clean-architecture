import { Application } from 'express'
import http from 'http'

export abstract class Bootstrap {
   abstract initialize(): Promise<string | Error>
}

export default class extends Bootstrap {
   constructor(private readonly app: Application) {
      super()
   }

   initialize(): Promise<string | Error> {
      return new Promise<string | Error>((resolve, reject) => {
         const server = http.createServer(this.app)

         server
            .listen(3000)
            .on('listening', () => {
               resolve('Promise resolve successfully')
               console.log('Listening on port 3000')
            })
            .on('error', error => {
               reject(error)
               console.log('error on port 3000')
            })
      })
   }
}
