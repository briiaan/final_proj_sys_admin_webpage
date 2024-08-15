import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "The Company's Internal Wiki" },
    { name: "description", content: "Find Everything you need to know!" },
    { name: "viewport", content: "width=device-width, initial-scale=1"},
    { charSet: "utf-8"}
  ];
};

export default function Index() {
  return (
    <div>
      <nav className="bg-orange-700 shadow-lg sticky top-0 z-50">
    <div className="container mx-auto">
      <div className="sm:flex justify-around">
      <a href="#" className="text-white text-3xl font-bold p-3">Wiki</a>
      <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
        <li className="sm:inline-block">
          <a href="#" className="p-3 hover:text-white">Home</a>
        </li>
        <li className="sm:inline-block">
          <a href="#it-doc" className="p-3 hover:text-white">IT</a>
        </li>
        <li className="sm:inline-block">
          <a href="#eng-doc" className="p-3 hover:text-white">Engineering</a>
        </li>
      </ul>
      </div>
    </div>
    </nav>

    <div className="p-2">
      <div>
        <p id="it-doc" className="font-bold">IT Documentation</p>
        <br></br>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada accumsan interdum faucibus platea nec sit rutrum. Nulla magnis donec cursus mauris sollicitudin praesent etiam fringilla dictum. Ut feugiat inceptos dolor commodo interdum porta sollicitudin lobortis? Primis posuere urna sed montes montes est feugiat. Duis at varius amet nullam lobortis taciti. Montes ligula habitant libero nulla suscipit a senectus quisque. Habitant nulla eget diam parturient interdum vitae massa. Rhoncus at vulputate tincidunt sed eleifend convallis semper fermentum. Sem feugiat netus hac laoreet eleifend; vulputate ad sodales semper.

Vehicula purus enim lectus proin sit massa posuere. Venenatis felis ullamcorper rutrum sem erat fermentum condimentum dolor felis. Duis rutrum enim tempus bibendum nostra aliquet euismod. Platea vitae nibh in, tincidunt tincidunt curabitur mi. Conubia enim penatibus montes congue finibus diam conubia gravida? Pretium nisl efficitur commodo pulvinar a adipiscing curae ornare.

Ante ac auctor magnis aenean suscipit duis molestie. Auctor lobortis tempor integer magna in nec rhoncus. Vivamus urna bibendum inceptos maximus rhoncus felis aliquet morbi.</p>
<br></br>
<p>Server Information</p>
<br></br>
<p>Aaliquam ligula pellentesque nulla suspendisse tellus nullam. Dolor aliquet semper pretium cursus curabitur felis. Mauris mattis in porta enim suspendisse enim potenti. Natoque maximus sem sollicitudin placerat nostra parturient odio.

Amet dolor elementum ultricies viverra suscipit facilisi. Bibendum varius blandit iaculis tempus potenti nullam? Himenaeos lacus lacus pellentesque iaculis aptent egestas congue. Consectetur primis efficitur primis hendrerit etiam tristique vel sociosqu. Lacinia sollicitudin vehicula tristique condimentum eros montes. Taciti nec nostra pulvinar justo aenean. Montes fringilla volutpat semper accumsan nunc scelerisque nibh tellus donec. Nisi habitant cursus congue viverra litora ullamcorper mi. Potenti ligula rhoncus potenti nibh suspendisse sodales. Pellentesque nisl convallis habitasse pharetra finibus.

Dapibus nostra pretium habitant elit nisl malesuada. Suscipit pellentesque odio id a cras commodo blandit est massa. Hac aptent habitasse mauris litora egestas et hendrerit. Elementum maecenas nisl etiam in curae mauris eget mauris. Semper eros consequat consectetur adipiscing natoque velit lorem interdum. Ipsum mus lobortis fusce bibendum facilisis vehicula. Dignissim fames dolor facilisis venenatis augue, vitae metus aptent.

Torquent turpis odio mus fusce scelerisque lectus ut.</p>
<br></br>
<p>Hardware</p>
<br></br>
<p>
Egestas platea nunc, fringilla sit nec viverra auctor. Arcu pretium a nam lobortis eu auctor facilisis ultrices aptent. Ac semper erat mus maecenas purus. Nibh consectetur hac nibh a rhoncus montes lacus purus. Ullamcorper fames quisque porttitor ad senectus ultrices cursus ultricies. Dolor ad leo nisl eget mus curabitur iaculis; dapibus vel. Potenti convallis tellus consequat etiam neque auctor eros. Elit habitasse morbi orci gravida urna aenean fringilla aptent.

Proin sem aenean eros enim habitasse cursus duis aliquam. Blandit sodales euismod fusce ipsum ullamcorper est. Nulla ex curae facilisi, vehicula ligula quis dolor nullam malesuada. Enim netus vestibulum vehicula ac posuere parturient fermentum fusce. Semper sit volutpat nam integer inceptos duis sollicitudin. Turpis curabitur molestie nascetur facilisis lobortis auctor ac.

Eros mi ridiculus pretium imperdiet condimentum consectetur. Est ex efficitur mus maximus montes convallis nibh augue aliquet. </p>
<br></br>
<p>Ticketing System</p>
<br></br>
<p>Congue montes cras porta blandit senectus vel facilisi aptent? Fusce dis rhoncus morbi in sem donec vitae? Porta odio habitant efficitur augue parturient torquent quisque consectetur. Ultricies netus montes praesent ornare nullam consequat. Posuere magnis taciti ridiculus volutpat habitasse finibus suspendisse vestibulum. Ac donec nibh, phasellus nulla nisi etiam molestie. Elementum ridiculus sagittis accumsan diam lobortis inceptos.

Tortor lacinia euismod justo curae torquent imperdiet viverra hendrerit. Curabitur parturient viverra dignissim nec nascetur commodo. Ante massa arcu taciti ad nullam praesent amet nascetur? Cras dapibus dui fermentum accumsan pretium facilisis nisi tempor. </p>
<br></br>
<p>Data Access Permissions</p>
<br></br>
<p>Imperdiet nec massa vel cursus quis habitant augue volutpat. Aliquam platea convallis ultrices lectus dignissim amet parturient. Adipiscing accumsan malesuada rhoncus mus ultricies ex vehicula vitae augue? Urna ad mus malesuada justo elit duis. Sollicitudin placerat enim primis proin nisi scelerisque id nullam.

Laoreet tempor eros montes ante; tristique interdum. Mi aliquet himenaeos ante ornare eleifend nascetur mus. Justo curae odio metus parturient posuere lacinia? Adipiscing fermentum risus praesent himenaeos ultricies laoreet. Ante blandit a donec inceptos convallis eu malesuada volutpat. Curae nam vivamus ligula; placerat porta lacinia efficitur sem. Nec nam mus semper ornare erat condimentum dolor. Fusce maximus sollicitudin platea lacus integer ac.</p>
      </div>
<div>
  <br></br>
        <p id="eng-doc" className="font-bold">Engineering Documentation</p>
        <br></br>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada accumsan interdum faucibus platea nec sit rutrum. Nulla magnis donec cursus mauris sollicitudin praesent etiam fringilla dictum. Ut feugiat inceptos dolor commodo interdum porta sollicitudin lobortis? Primis posuere urna sed montes montes est feugiat. Duis at varius amet nullam lobortis taciti. Montes ligula habitant libero nulla suscipit a senectus quisque. Habitant nulla eget diam parturient interdum vitae massa. Rhoncus at vulputate tincidunt sed eleifend convallis semper fermentum. Sem feugiat netus hac laoreet eleifend; vulputate ad sodales semper.

Vehicula purus enim lectus proin sit massa posuere. Venenatis felis ullamcorper rutrum sem erat fermentum condimentum dolor felis. Duis rutrum enim tempus bibendum nostra aliquet euismod. Platea vitae nibh in, tincidunt tincidunt curabitur mi. Conubia enim penatibus montes congue finibus diam conubia gravida? Pretium nisl efficitur commodo pulvinar a adipiscing curae ornare.

Ante ac auctor magnis aenean suscipit duis molestie. Auctor lobortis tempor integer magna in nec rhoncus. Vivamus urna bibendum inceptos maximus rhoncus felis aliquet morbi.</p>
<br></br>
<p>Backend API</p>
<br></br>
<p>Aaliquam ligula pellentesque nulla suspendisse tellus nullam. Dolor aliquet semper pretium cursus curabitur felis. Mauris mattis in porta enim suspendisse enim potenti. Natoque maximus sem sollicitudin placerat nostra parturient odio.

Amet dolor elementum ultricies viverra suscipit facilisi. Bibendum varius blandit iaculis tempus potenti nullam? Himenaeos lacus lacus pellentesque iaculis aptent egestas congue. Consectetur primis efficitur primis hendrerit etiam tristique vel sociosqu. Lacinia sollicitudin vehicula tristique condimentum eros montes. Taciti nec nostra pulvinar justo aenean. Montes fringilla volutpat semper accumsan nunc scelerisque nibh tellus donec. Nisi habitant cursus congue viverra litora ullamcorper mi. Potenti ligula rhoncus potenti nibh suspendisse sodales. Pellentesque nisl convallis habitasse pharetra finibus.

Dapibus nostra pretium habitant elit nisl malesuada. Suscipit pellentesque odio id a cras commodo blandit est massa. Hac aptent habitasse mauris litora egestas et hendrerit. Elementum maecenas nisl etiam in curae mauris eget mauris. Semper eros consequat consectetur adipiscing natoque velit lorem interdum. Ipsum mus lobortis fusce bibendum facilisis vehicula. Dignissim fames dolor facilisis venenatis augue, vitae metus aptent.

Torquent turpis odio mus fusce scelerisque lectus ut.</p>
<br></br>
<p>Data API</p>
<br></br>
<p>
Egestas platea nunc, fringilla sit nec viverra auctor. Arcu pretium a nam lobortis eu auctor facilisis ultrices aptent. Ac semper erat mus maecenas purus. Nibh consectetur hac nibh a rhoncus montes lacus purus. Ullamcorper fames quisque porttitor ad senectus ultrices cursus ultricies. Dolor ad leo nisl eget mus curabitur iaculis; dapibus vel. Potenti convallis tellus consequat etiam neque auctor eros. Elit habitasse morbi orci gravida urna aenean fringilla aptent.

Proin sem aenean eros enim habitasse cursus duis aliquam. Blandit sodales euismod fusce ipsum ullamcorper est. Nulla ex curae facilisi, vehicula ligula quis dolor nullam malesuada. Enim netus vestibulum vehicula ac posuere parturient fermentum fusce. Semper sit volutpat nam integer inceptos duis sollicitudin. Turpis curabitur molestie nascetur facilisis lobortis auctor ac.

Eros mi ridiculus pretium imperdiet condimentum consectetur. Est ex efficitur mus maximus montes convallis nibh augue aliquet. </p>
<br></br>
<p>System Configuration Outline</p>
<br></br>
<p>Congue montes cras porta blandit senectus vel facilisi aptent? Fusce dis rhoncus morbi in sem donec vitae? Porta odio habitant efficitur augue parturient torquent quisque consectetur. Ultricies netus montes praesent ornare nullam consequat. Posuere magnis taciti ridiculus volutpat habitasse finibus suspendisse vestibulum. Ac donec nibh, phasellus nulla nisi etiam molestie. Elementum ridiculus sagittis accumsan diam lobortis inceptos.

Tortor lacinia euismod justo curae torquent imperdiet viverra hendrerit. Curabitur parturient viverra dignissim nec nascetur commodo. Ante massa arcu taciti ad nullam praesent amet nascetur? Cras dapibus dui fermentum accumsan pretium facilisis nisi tempor. </p>
<br></br>
<p>Data Flowcycle</p>
<br></br>
<p>Imperdiet nec massa vel cursus quis habitant augue volutpat. Aliquam platea convallis ultrices lectus dignissim amet parturient. Adipiscing accumsan malesuada rhoncus mus ultricies ex vehicula vitae augue? Urna ad mus malesuada justo elit duis. Sollicitudin placerat enim primis proin nisi scelerisque id nullam.

Laoreet tempor eros montes ante; tristique interdum. Mi aliquet himenaeos ante ornare eleifend nascetur mus. Justo curae odio metus parturient posuere lacinia? Adipiscing fermentum risus praesent himenaeos ultricies laoreet. Ante blandit a donec inceptos convallis eu malesuada volutpat. Curae nam vivamus ligula; placerat porta lacinia efficitur sem. Nec nam mus semper ornare erat condimentum dolor. Fusce maximus sollicitudin platea lacus integer ac.</p>
      </div>
    </div>
    </div>
  );
}
