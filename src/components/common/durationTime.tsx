
interface timeProps {
    time: Date
}

export const Timeinfo: React.FC<timeProps>= ({ time }) => {
    const thistime = new Date().getTime();
    const timeposted = time.getTime();
  
    const distance = thistime - timeposted;
  
    const distanceSeconds = Math.floor(distance / 1000);
    const distanceMinutes = Math.floor(distance / 1000 / 60);
    const distanceHours = Math.floor(distance / 1000 / 60 / 60);
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24);
    const distanceMounth = Math.floor(distance / 1000 / 60 / 60 / 24 / 30);
  
    if (distanceMounth > 0) {
      return (<>{distanceMounth}y</>);
    } else if (distanceDay > 0) {
      return (<>{distanceDay}d</>);
    } else if (distanceHours > 0) {
      return (<>{distanceHours}h</>);
    } else if (distanceMinutes > 0) {
      return (<>{distanceMinutes}m</>);
    } else if (distanceSeconds > 0) {
      return (<>just now</>);
    }
  }