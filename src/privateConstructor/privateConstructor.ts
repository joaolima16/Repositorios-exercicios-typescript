export class Database {
    private readonly user: string;
    private readonly host: string;
    private readonly password: string;
    private static database: Database;
    private constructor(user: string, host: string, password: string) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect(): void {
        console.log(`Conectado: ${this.user}, ${this.host}, ${this.password}`);
    }
    static setDatabase(user: string, host: string, password: string): Database {
        if (Database.database) {
            console.log("Uma instância do banco de dados já foi criada");
            return Database.database;
        } else {
            Database.database = new Database(user, host, password);
            return Database.database;
        }
    }
}
const dbConfig = Database.setDatabase("joao", "localhost", "1234");
dbConfig.connect();
