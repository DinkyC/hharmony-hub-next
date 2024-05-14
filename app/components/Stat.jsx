import Style from "../styles/Stat.module.css"
function StatDesc({ desc }) {
    if (desc !== null) {
       return <div className="stat-desc">{desc}</div> 
    }
}


export default function Stat({ title, value, desc=null, classNames=null }) {
   return (
        <div className="stats bg-dark-slate shadow">
          
          <div className="stat">
            <div className={`stat-title  font-bold`}>{title}</div>
            <div className={`stat-value ${Style.textHover} text-base ${classNames}`}>{value}</div>
            <StatDesc desc={desc} /> 
          </div>
        
        </div>
   );
}
