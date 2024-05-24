import logo from './logo.svg';
import './App.css';
import Message from './Message';


function App() {
  let carddeatial = [
    {
      head: "FREE",
      amount: "$0/month",
      durate: "",
      user: "Singel User",
      isUser: true,
      storage: "5gb storage",
      isStorage: true,
      project: 'Unlimted Public Projects',
      isProject: true,
      acces: 'Community Acces',
      isAcces: false,
      privat: 'Unlimited Private Projects',
      isPrivate: false,
      phone: "Dedicated phone support",
      isPhone: false,
      domin: "Free subdomin",
      isDomin: false,
      status: "Monthly status",
      isStatus: false,

      but: "Button",
      mode: "free",

    },
    {
      head: "PLUS",
      amount: "$9/month",
      durate: "",
      user: "5 User",
      isUser: true,
      storage: "5gb Storage",
      isStorage: true,
      project: 'Unlimted Public Projects',
      isProject: true,
      acces: 'Community Acces',
      isAcces: true,
      privat: 'Unlimited Private Projects',
      isPrivate: true,
      phone: "Dedicated Phone Support",
      isPhone: true,
      domin: "Free Subdomin",
      isDomin: false,
      status: "Monthly Status",

      but: "Button",
      mode: "free",
    },
    {
      head: "PRO",
      amount: "$49/month",
      durate: "",
      user: "User",
      isUser: true,
      storage: "5gb Storage",
      isStorage: true,
      project: 'Unlimted Public Projects',
      isProject: true,
      acces: 'Community Acces',
      isAcces: true,
      privat: 'Unlimited Private Projects',
      isPrivate: true,
      phone: "Dedicated Phone Support",
      isPhone: true,
      domin: "Free Subdomin",
      isDomin: true,
      status: "Monthly status",
      isStatus: true,
      but: "Button",
      mode: "free",
    },
  ]



  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            carddeatial.map((details, index) => {
              return <Message key={index} deatil={details}></Message>
            })
          }
        </div>
      </div>
    </section>


  )
}

export default App;
