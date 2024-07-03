import React from "react";

type BlogProps = {
  initData?: string
}

export default function Blog({ initData }: BlogProps) {
  const [md, setMd] = React.useState(initData);

  const getMdData = () => {
    console.log("getMdData");

    setMd("NEW!")
  }

  React.useEffect(() => {
    if (!initData) {
      getMdData()
    }
  }, []);

  return <div>{md}</div>
}
