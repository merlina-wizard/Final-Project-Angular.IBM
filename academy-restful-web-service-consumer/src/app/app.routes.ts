import { Routes } from '@angular/router';
import { IndexComponent } from './module/academy/index/index.component';
import { CreateComponent } from './module/academy/create/create.component';
import { EditComponent } from './module/academy/edit/edit.component';


/*
all'interno dell'Array routes
è possibile impostare le rotte di navigazione
dell'applicazione  e corrispondenti Component
che Node.js dovrà caricare per ogni rotta
*/
export const routes: Routes = [
    { path: 'academy', redirectTo: 'academy/index', pathMatch: 'full'},
    { path: 'academy/index', component: IndexComponent },
    { path: 'academy/create', component: CreateComponent },
    { path: 'academy/:code/edit', component: EditComponent }
];
