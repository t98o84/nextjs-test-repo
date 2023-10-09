import {ClientComponent} from "@/app/server-component/client-component";
import {ServerComponentInClientComponent} from "@/app/server-component/server-component-in-client-component";

export default function Page() {
    console.log('SSR Page');
    return <div>
        <h1>ServerComponentPage</h1>
        <ClientComponent>
            <ServerComponentInClientComponent></ServerComponentInClientComponent>
        </ClientComponent>
    </div>
}
