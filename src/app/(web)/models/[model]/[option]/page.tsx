import Layout1Basic from './(layout)/Layout1Basic';
import Layout2COlor from './(layout)/Layout2Color';
import Layout3Center from './(layout)/Layout3Center';

export default function OptionPage({ params }: { params: { model: string; option: string } }) {
  return (
    <>
      {/* <Layout1Basic /> */}

      <Layout2COlor params={params} />

      {/* <Layout3Center /> */}
    </>
  );
}
