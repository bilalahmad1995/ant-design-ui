import { Row, Col } from "antd";


const items = [
    {
      key: "1",
      title: "Web and mobile payment built for developers",
      content:
        "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "2",
      title: "Work better together. Schedule meetings",
      content:
        "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
    {
      key: "3",
      title: "The best app to increase your productivity",
      content:
        "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
    },
  ]

  function AppAbout() {
    return (
      <div id="about" className="block aboutBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>About Us</h2>
            <p>dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className="contentHolder">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
          </div>
          <Row gutter={[16, 16]}>   
            {items.map(item => {
              return (
                <Col md={{ span: 8 }} key={item.key}>
                  <div className="content">
                    <div className="icon">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
  
  export default AppAbout;