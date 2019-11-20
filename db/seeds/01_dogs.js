exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("dogs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dogs").insert([
        {
          adopted: true,
          adoptedDate: "2019-10-15T09:00:10 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "black",
          breed: "shihtzu",
          name: "George",
          gender: "male",
          about:
            "Adipisicing nulla amet ex consectetur enim aliquip reprehenderit aute elit commodo consequat esse. Elit amet ad ipsum mollit. Aliquip laborum nostrud non in dolore cupidatat excepteur laboris. Nulla nostrud veniam anim aliqua voluptate enim.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-07-08T10:06:29 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "white",
          breed: "shihtzu",
          name: "Rocha",
          gender: "male",
          about:
            "Consequat Lorem sit labore pariatur voluptate officia cupidatat quis sint non id sunt laborum. Sit ex ipsum commodo est adipisicing. Veniam irure elit ut irure nulla esse elit consequat ea qui enim.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "brown",
          breed: "mix",
          name: "Elvira",
          gender: "female",
          about:
            "Laboris mollit est proident commodo duis aute. Nisi reprehenderit aute reprehenderit id duis exercitation magna velit. Magna qui in aliqua qui pariatur incididunt irure in ad cillum. Labore cupidatat sit non excepteur ullamco. Cupidatat voluptate adipisicing fugiat ut velit adipisicing officia sunt aliqua.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "brown",
          breed: "rottweiler",
          name: "Diane",
          gender: "female",
          about:
            "Culpa magna adipisicing id nostrud ex nulla aute consequat do esse irure nisi adipisicing magna. Nisi ut minim eiusmod ut incididunt. Enim consequat sit sunt magna veniam magna magna irure esse.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "brown",
          breed: "rottweiler",
          name: "Vasquez",
          gender: "male",
          about:
            "Aute tempor incididunt mollit occaecat laboris magna. Nisi ea velit mollit incididunt do incididunt qui nulla incididunt nisi velit irure. Veniam consectetur sunt sit deserunt quis ex nostrud tempor. Cupidatat mollit sunt aliqua quis elit commodo consequat fugiat. Consectetur quis deserunt consectetur enim proident reprehenderit officia est enim magna elit dolor. Nulla labore deserunt esse laboris ipsum non sunt nulla sunt est.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-08-26T07:14:18 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "white",
          breed: "beagle",
          name: "Hebert",
          gender: "male",
          about:
            "Eiusmod consectetur enim enim eu nostrud enim ea eu cupidatat. Et quis exercitation consectetur nulla anim aute magna. Elit consectetur dolore aliquip reprehenderit. Proident ea voluptate sit reprehenderit et aliquip sit duis est enim mollit exercitation enim. Officia Lorem laborum sunt aliqua. Ea amet eiusmod amet mollit dolor esse est magna exercitation. Est laborum anim laborum nulla est irure dolore reprehenderit do.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "white",
          breed: "pitbull",
          name: "Jefferson",
          gender: "male",
          about:
            "Ullamco adipisicing ullamco tempor exercitation pariatur labore culpa ut anim officia. Pariatur aliquip consectetur enim culpa voluptate minim proident non dolor magna occaecat ex deserunt minim. Incididunt dolore nisi ea adipisicing exercitation esse enim ut esse id qui fugiat cupidatat culpa.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "white",
          breed: "germanshepherd",
          name: "Roxanne",
          gender: "female",
          about:
            "Consectetur proident occaecat ex id incididunt velit enim eu qui enim voluptate ullamco. Magna voluptate consequat dolore minim irure deserunt tempor mollit non ea exercitation laborum nisi consequat. Aliquip ad ipsum laborum elit adipisicing pariatur quis quis elit consequat. Quis dolore amet incididunt ad eu irure eiusmod.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-03-02T05:12:58 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "black",
          breed: "pitbull",
          name: "Le",
          gender: "male",
          about:
            "Duis veniam non fugiat esse nisi nisi et minim qui tempor non. Duis minim incididunt voluptate pariatur esse consectetur sit Lorem dolor cupidatat sint adipisicing velit commodo. Mollit amet in incididunt non eu culpa velit.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-01-18T07:31:14 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "tricolor",
          breed: "mix",
          name: "Maura",
          gender: "female",
          about:
            "Reprehenderit excepteur tempor exercitation aliquip ad voluptate consectetur et cupidatat non ut. Consequat commodo nisi laboris consectetur. Quis enim aute occaecat laborum. Nulla duis ipsum laborum irure proident occaecat labore officia ut aliquip dolor. Eu proident qui esse aliqua occaecat laboris. Commodo ipsum eu et est. Ipsum et duis et ad laboris.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-09-22T06:32:45 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "tricolor",
          breed: "boxer",
          name: "Bradshaw",
          gender: "male",
          about:
            "Duis anim sunt nisi Lorem magna non consectetur amet ipsum est sunt. Sit et consequat sit veniam aute dolore aute ipsum elit magna sint tempor commodo. Ea labore aute cillum occaecat duis sunt deserunt qui dolor irure fugiat dolore. Mollit dolor est dolore Lorem tempor nisi reprehenderit. Sit aute est exercitation veniam commodo. Dolor Lorem officia excepteur aliquip laborum laborum.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-05-01T05:13:57 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "white",
          breed: "collie",
          name: "Isabella",
          gender: "female",
          about:
            "Excepteur nisi irure pariatur et veniam. Amet do fugiat laboris aliquip incididunt enim velit. Voluptate cupidatat excepteur Lorem exercitation enim ipsum do adipisicing mollit dolore non.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "white",
          breed: "collie",
          name: "Mendoza",
          gender: "male",
          about:
            "Labore ea ullamco duis magna ipsum sunt minim duis et nulla sint est. Consectetur aute tempor dolore consectetur occaecat. Tempor est id excepteur eu voluptate.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "black",
          breed: "shihtzu",
          name: "Huber",
          gender: "male",
          about:
            "Veniam laboris laboris eu do velit aliqua. Dolore dolore enim elit officia fugiat Lorem do esse eu ut ad deserunt. Ad Lorem incididunt voluptate id sit consectetur aliquip enim. Cillum reprehenderit mollit tempor et in anim. Ut consectetur qui ea magna aliquip eiusmod amet amet reprehenderit in. Ipsum id culpa laboris esse irure ex incididunt adipisicing non. Anim qui eu exercitation officia.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-11-16T09:55:34 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "white",
          breed: "boxer",
          name: "Hatfield",
          gender: "male",
          about:
            "Do duis incididunt eiusmod culpa qui cillum quis sit. Occaecat commodo sit non sint laboris excepteur. Anim commodo consectetur elit officia esse. Pariatur nostrud fugiat sunt sit do. Irure consequat voluptate officia incididunt consequat elit deserunt ea irure incididunt quis esse. Irure nisi aliqua pariatur nulla irure.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "white",
          breed: "pitbull",
          name: "Allyson",
          gender: "female",
          about:
            "Ullamco ex dolore velit nulla officia sunt occaecat sunt ullamco eiusmod amet culpa non. Sunt dolore dolore excepteur ipsum. Dolore commodo qui sit tempor et nisi elit enim minim.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-01-23T07:55:31 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "brown",
          breed: "mix",
          name: "Cassandra",
          gender: "female",
          about:
            "Ipsum Lorem veniam laboris velit voluptate. Ipsum id sit elit pariatur amet magna occaecat pariatur non anim est sint. Sunt magna tempor ut cupidatat proident officia.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-01-08T03:06:39 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "tricolor",
          breed: "shihtzu",
          name: "Fischer",
          gender: "male",
          about:
            "Ex mollit ex ipsum incididunt Lorem do culpa id reprehenderit. Nostrud irure consectetur excepteur ipsum adipisicing fugiat excepteur consequat. Do voluptate officia dolor pariatur veniam esse consequat qui id eu tempor consectetur minim. Occaecat non incididunt magna commodo laboris ad nulla magna do anim laborum. Pariatur anim officia consequat aliquip exercitation sunt do anim. Anim elit eiusmod eiusmod minim fugiat.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "black",
          breed: "mix",
          name: "Kimberly",
          gender: "female",
          about:
            "Esse aliquip ut anim commodo deserunt sit. Proident occaecat aliquip cupidatat consectetur in deserunt. Consectetur id ad reprehenderit velit dolor laborum ullamco adipisicing culpa voluptate sit consequat anim esse.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-01-17T07:31:21 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "white",
          breed: "husky",
          name: "Simone",
          gender: "female",
          about:
            "Sint adipisicing minim labore ullamco nostrud. Enim proident do sit Lorem ipsum. Cillum enim eu excepteur exercitation.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "white",
          breed: "pitbull",
          name: "Vaughn",
          gender: "male",
          about:
            "Ex nisi aliquip minim nostrud et ea pariatur ut minim aliquip. Aute est do excepteur aliqua tempor non aliquip minim labore magna. Fugiat in labore incididunt Lorem. Exercitation incididunt consequat officia cillum est. Et nulla do deserunt consectetur culpa voluptate sint.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "black",
          breed: "husky",
          name: "Lewis",
          gender: "male",
          about:
            "Commodo aliquip id ullamco elit ipsum est labore velit do veniam cupidatat adipisicing aute Lorem. Ea adipisicing sunt ipsum cillum ex non consectetur adipisicing excepteur excepteur ullamco. Sunt incididunt est veniam occaecat esse veniam. Exercitation minim labore voluptate enim. Sit pariatur ad proident quis proident anim enim qui nostrud nisi incididunt. Sunt pariatur velit id eiusmod elit adipisicing duis sunt occaecat. Tempor sunt anim deserunt nostrud do ullamco cillum proident.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "black",
          breed: "collie",
          name: "Elena",
          gender: "female",
          about:
            "Elit Lorem duis eiusmod consectetur dolore. Amet aliquip aute et voluptate reprehenderit magna sunt consectetur pariatur ad est quis. In cupidatat pariatur et nulla do sit veniam.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-05-27T07:15:29 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "black",
          breed: "mix",
          name: "Duffy",
          gender: "male",
          about:
            "Officia et enim Lorem ad ad sunt. Esse sit ex fugiat amet in. Consequat dolor sunt consequat nostrud consectetur reprehenderit consequat ipsum commodo nostrud. Culpa aliquip minim esse reprehenderit minim qui dolor non Lorem laboris dolor et. Qui excepteur deserunt ullamco commodo est excepteur aute.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "brown",
          breed: "rottweiler",
          name: "Blackwell",
          gender: "male",
          about:
            "Ea proident occaecat aute eiusmod. Qui sint enim deserunt aute minim pariatur velit nulla consequat Lorem sunt. Reprehenderit proident cupidatat nulla qui anim. Velit velit officia consequat irure eiusmod quis culpa eiusmod laborum. Id eiusmod laboris est eiusmod officia nulla cillum excepteur anim. Incididunt nulla aliqua ad nisi velit deserunt. Proident incididunt laboris magna occaecat adipisicing sit tempor non sunt et ea ut non incididunt.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-09-11T03:37:21 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "black",
          breed: "germanshepherd",
          name: "Cole",
          gender: "male",
          about:
            "Reprehenderit mollit velit excepteur consectetur amet officia ipsum. Mollit labore tempor ex esse in adipisicing cillum fugiat in et. Qui consequat nisi deserunt ut proident. Veniam sint reprehenderit proident velit anim aliquip occaecat excepteur adipisicing culpa quis et pariatur magna. Ullamco amet voluptate dolor adipisicing tempor voluptate non deserunt esse. Non laborum commodo non aliquip velit aute tempor deserunt.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "black",
          breed: "beagle",
          name: "Small",
          gender: "male",
          about:
            "Magna eiusmod ad exercitation do non voluptate excepteur consequat do ullamco est cillum sunt ullamco. Cupidatat non aliqua ad cupidatat amet occaecat anim veniam laboris cupidatat mollit. Fugiat irure laboris laborum consequat. Ex commodo reprehenderit amet labore elit qui magna.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-06-06T04:58:21 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "tricolor",
          breed: "rottweiler",
          name: "Margie",
          gender: "female",
          about:
            "Ullamco quis qui laborum eu sunt elit et sint quis incididunt aute est fugiat exercitation. Minim occaecat officia nostrud minim eiusmod id sunt pariatur cillum. Fugiat id Lorem ullamco eiusmod mollit. Ut tempor sint nostrud proident nostrud ut cillum in voluptate proident elit ea velit.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "brown",
          breed: "husky",
          name: "Frank",
          gender: "male",
          about:
            "Excepteur excepteur dolor aliquip sit aliquip exercitation ex eiusmod nisi consectetur mollit. Occaecat magna eiusmod laboris non laboris proident ad mollit aute id officia enim. Dolore commodo veniam consequat veniam mollit tempor aute aute ad reprehenderit. Aliquip mollit ut reprehenderit occaecat elit reprehenderit sit et incididunt deserunt.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-09-16T11:23:01 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "white",
          breed: "boxer",
          name: "Marisa",
          gender: "female",
          about:
            "Sint ea minim est magna ea reprehenderit cupidatat cupidatat. Eu Lorem pariatur anim nulla nostrud nulla eiusmod anim sit eu esse. Adipisicing et occaecat occaecat occaecat aute nisi. Ut ipsum in nulla adipisicing ea Lorem. Proident eiusmod labore adipisicing aliquip duis cillum. Cillum non voluptate aliquip anim nostrud adipisicing incididunt Lorem esse quis.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 2,
          color: "tricolor",
          breed: "boxer",
          name: "Lorna",
          gender: "female",
          about:
            "Magna ipsum reprehenderit in sint Lorem sint ullamco. Tempor ullamco sunt deserunt duis. Duis pariatur nostrud pariatur pariatur deserunt consectetur non do esse enim et.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-10-08T08:18:49 +07:00",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "brown",
          breed: "germanshepherd",
          name: "Dorthy",
          gender: "female",
          about:
            "Fugiat qui esse esse officia minim aute velit sit. Sit enim fugiat elit fugiat duis. Labore id dolor magna ex adipisicing elit laboris exercitation dolore anim consectetur reprehenderit commodo. Amet consequat nulla sunt culpa id ad occaecat cupidatat. Ipsum aute quis eu ut.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "brown",
          breed: "shihtzu",
          name: "Mckee",
          gender: "male",
          about:
            "Veniam enim ut ea fugiat cillum pariatur est voluptate in sit. Pariatur ut enim ad ad ullamco consequat cillum. Officia nisi sint culpa ullamco enim laboris mollit sunt ex fugiat velit anim laborum. Anim exercitation aute ex occaecat sunt nisi.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 4,
          color: "brown",
          breed: "boxer",
          name: "Myrtle",
          gender: "female",
          about:
            "Officia laboris in cillum nisi. Dolore commodo et ut ullamco dolor esse dolore culpa. Culpa ea ut aute minim culpa consequat excepteur laboris ullamco est aliqua non exercitation. Ut voluptate reprehenderit Lorem adipisicing sint non qui mollit ullamco deserunt ea aliquip. Velit nulla officia voluptate qui dolore sunt eiusmod mollit minim esse do. Aliquip cupidatat ex enim labore voluptate Lorem adipisicing laborum cillum nisi tempor quis. Quis dolore velit ut minim eiusmod.\r\n"
        },
        {
          adopted: false,
          adoptedDate: "",
          species: "Dog",
          picture: "http://placehold.it/32x32",
          age: 1,
          color: "white",
          breed: "husky",
          name: "Delgado",
          gender: "male",
          about:
            "Aliqua occaecat magna dolore ex fugiat non ea consequat culpa commodo nisi culpa aute excepteur. Irure eiusmod consectetur aliqua voluptate exercitation dolore incididunt ullamco. Reprehenderit ullamco minim duis nostrud ad dolor minim adipisicing et ad laboris quis ex. Proident laboris excepteur nulla voluptate qui excepteur occaecat et. Aute proident esse laborum dolore exercitation. Proident officia exercitation nostrud sint dolore proident pariatur do. Consequat culpa amet ea commodo aliquip.\r\n"
        }
      ]);
    });
};
