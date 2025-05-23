import { ClientComponentone } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
    return (
        <section className="w-full h-screen  my-12 m-auto">
            <h1>Interleaving</h1>

            <ClientComponentone >

                <ServerComponentOne>
                    
                </ServerComponentOne>

                </ClientComponentone>

            
        </section>
    );
}
