import { writeFile, readFile } from 'fs/promises'

export class Alunos {
    dataSource = alunos 

    getDataSource () {
        return this.dataSource
    }

    writeAlunos() {
        try {
            writeFile('alunosDataSource.json',JSON.stringify(this.dataSource, null, 2))
        } catch (error) {
            console.error(`erro ao escrever o arquivo. erro: ${error}`)
        }
    }

    async readAlunosDataSource() {
        const readAlunos = readFile('alunosDataSource.json', 'utf-8')
        return readAlunos
    }
}