import { Card,CardHeader,CardTitle,CardDescription,CardContent } from "../ui/card";
import {Avatar,AvatarFallback} from "../ui/avatar"
const clientes =[
    {nome: "João Silva", email: "joao.silva@example.com"},
    {nome: "Maria Oliveira", email: "maria.oliveira@example.com"},
    {nome: "Carlos Souza", email: "carlos.souza@example.com"},
    {nome: "Ana Pereira", email: "ana.pereira@example.com"}
]

export default function Sales() {
    return(
      <Card>
        <CardHeader>
            <CardTitle>Últimos Clientes</CardTitle>
            <CardDescription>Clientes cadastrados recentemente</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="divide-y divide-border">
                {clientes.map((cliente, index) => (
                    <li key={index} className=" flex items-center gap-3 py-2">
                        <Avatar>
                            <AvatarFallback>{cliente.nome.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{cliente.nome}</p>
                             <p className="text-sm text-muted-foreground">{cliente.email}</p>
                        </div>
                      
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    )
}