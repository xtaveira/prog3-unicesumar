import { writeFile, readFile } from 'fs/promises'
import dataProducts from './dataProducts.js'

export class Products {
    data = dataProducts;

    writeProducts() {
        try {
            writeFile('dataProducts.json', JSON.stringify(this.data, null, 2))
        } catch (error) {
            console.log(error)
        }
    }

    readProducts() {
        try {
            readFile('dataProducts.json','utf-8')
        } catch (error) {
            console.log(error)
        }
    }
    getData() {
        return this.data
    }
}