const Notification = (props) => {
  //  Write your code here.
  const {iconUrl, iconClass, msgClass, msgContent} = props.source;
  return(
      <div className = {msgClass}>
          <img src ={iconUrl} className {iconClass}/>
          <p>{msgContent}></p>
      </div>
  );
};

const sourcePrimary = {
    iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    iconClass="msg-img",
    msgClass = "msg-card",
    msgContent="Information Message",  
};
const sourceSuccess = {
    iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    iconClass="msg-img",
    msgClass = "msg-card",
    msgContent="Success Message",  
};
const sourceWarning = {
    iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    iconClass="msg-img",
    msgClass = "msg-card",
    msgContent="Warning Message",  
};
const dangerSource = {
    iconUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    iconClass="msg-img",
    msgClass = "msg-card",
    msgContent = "Danger Message",
};
const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Notification </h1>
      <Notification source ={sourcePrimary}/>
      <Notification source ={sourceSuccess}/>
      <Notification source ={sourceWarning}/>
      <Notification source ={sourceDanger}/>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
