import {  Outlet, NavLink } from "react-router-dom";
import { ContactsFromPage } from "../../containers/ContactFromPage/ContPageFromPage";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    ContactsFromPage: '/ContactFromPage',
};

function Root() {
    return (
        <>
            <nav style={{
                backgroundColor: ' hsl(90, 10%, 95%)',
                // height: 100,
                
            }}>
                <NavLink to={ROUTES.CONTACTS} >
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} >
                Appointments
                </NavLink>
                <NavLink to={ROUTES.ContactsFromPage} >
                 Add Contacts 
                 </NavLink>

            </nav>
            <Outlet/>
      </>
    );

}

export default Root;