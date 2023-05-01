const defaultValue = [
    {
        "id" : 1,
        "title" : "Mole App",
        "description" : "This application is used to compare hero lists on Mobile Legend, uses the unofficial Mobile Legend API and uses Midtrans as payment",
        "techStack" : "Vue.js, Midtrans, Pinia, Vue-Router, unoffical mobile legend API,Nodemailer,JWT,Bcyrpt.js,Bootstrap",
        "webDeploy" : "https://mole-app-2dfe7.web.app/",
        "imgUrl" : "https://i.postimg.cc/cLynN5BV/Screenshot-12.png"
    },
    {
        "id" : 2,
        "title" : "HOKBEN (CMS-Admin Site)",
        "description" : "an application that consists of a cms and a user, in the cms-site there is a CRUD feature where we are in the position of admin on the cms web, and on the user-site we can see a list of products displayed on the landing page and we can see the details of the products being sold",
        "techStack" : "React.js,Redux,ReduxThunk,React-Router,Tailwind.css,React-Router,JWT,Bcrypt.js,Sequelize.js,AWS,Firebase,Supabase",
        "webDeploy" : "https://hokben-admin-99141.web.app/",
        "imgUrl" : "https://i.postimg.cc/MKftB2Cn/Screenshot-15.png"
    },
    {
        "id" : 3,
        "title" : "HOKBEN (Client Site)",
        "description" : "an application that consists of a cms and a user, in the cms-site there is a CRUD feature where we are in the position of admin on the cms web, and on the user-site we can see a list of products displayed on the landing page and we can see the details of the products being sold",
        "techStack" : "React.js,Redux,ReduxThunk,React-Router,Tailwind.css,React-Router,JWT,Bcrypt.js,Sequelize.js,AWS,Firebase,Supabase",
        "webDeploy" : "https://hokben-a644a.web.app/",
        "imgUrl" : "https://i.postimg.cc/65Lvtfbq/Screenshot-13.png"
    }
]
export default function postReducer(state = defaultValue,action){
    if (action.type === 'posts/fetchsuccess') {
        return {
            ...state,
            item : action.payload
        }
    }
    else {
        return state
    }
}