exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("animals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("animals").insert([
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "tricolor",
          breed: "Domestic Shorthair/Mix",
          name: "Jewel",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-06-11T05:01:41 +07:00",
          about:
            "Ipsum nostrud dolor tempor do. Aliqua est excepteur amet cillum labore enim dolor pariatur adipisicing. Magna fugiat cupidatat fugiat in ut id enim cillum excepteur consequat officia. Proident mollit esse ut mollit nulla minim reprehenderit esse enim consectetur officia mollit velit qui.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "white",
          breed: "Domestic Medium Hair/Mix",
          name: "Marsha",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-08-20T08:09:01 +07:00",
          about:
            "Cillum nulla anim non ex eu. Ex laborum do mollit laboris dolore esse nostrud deserunt exercitation proident non. Consequat qui cillum eiusmod ullamco magna exercitation nulla incididunt Lorem pariatur. Incididunt exercitation est id fugiat cupidatat magna et in nisi consequat irure. Quis ullamco anim sint esse ea laboris culpa cupidatat aute duis do tempor eiusmod duis.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "tricolor",
          breed: "Domestic Long Hair/Mix",
          name: "Joy",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-10-08T10:48:48 +07:00",
          about:
            "Eu Lorem duis laboris enim consectetur enim do non non consectetur aliqua cillum incididunt. Voluptate anim consectetur est in commodo sit ad aliqua voluptate reprehenderit magna quis cillum. Id quis cillum non enim proident aliquip reprehenderit eiusmod excepteur. Aliquip voluptate id id cillum occaecat in aliqua excepteur. Aliqua ex amet et elit ipsum ipsum nisi do et labore reprehenderit.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "brown",
          breed: "Domestic Long Hair/Mix",
          name: "Alissa",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Quis consectetur ut quis exercitation labore ipsum aute ullamco. Dolore incididunt mollit irure duis. Incididunt amet aliqua elit sint qui velit do ea sit sint ipsum laboris.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "brown",
          breed: "Domestic Long Hair/Mix",
          name: "Desiree",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-07-03T01:42:02 +07:00",
          about:
            "Commodo exercitation aliquip id mollit in. Eiusmod officia mollit adipisicing quis do pariatur dolor incididunt sint esse. Nisi est fugiat dolore adipisicing ut do nulla pariatur commodo dolor officia est. Deserunt laboris aliqua qui culpa ex dolore do sunt. Pariatur laborum minim exercitation laborum esse consequat. Tempor sit quis consequat laboris proident minim eiusmod consequat dolor proident ipsum ullamco consectetur. Tempor non sint veniam do aliquip tempor nisi enim laboris dolor.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "brown",
          breed: "Domestic Shorthair/Mix",
          name: "Ruiz",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-10-06T09:24:27 +07:00",
          about:
            "Elit deserunt do est ullamco exercitation enim elit duis proident veniam dolore. Sunt occaecat id nostrud adipisicing voluptate aliquip voluptate voluptate in. Mollit exercitation incididunt aute anim ea irure. Quis minim aliquip in magna. Nostrud laborum qui amet ea veniam reprehenderit elit.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "tricolor",
          breed: "Domestic Shorthair/Mix",
          name: "Mercedes",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-04-28T10:31:33 +07:00",
          about:
            "Esse irure magna quis occaecat occaecat do commodo enim dolor proident dolor dolor. Labore dolor mollit velit id aute nulla commodo. In cupidatat ullamco occaecat Lorem et amet aliquip irure ullamco.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "brown",
          breed: "Domestic Medium Hair/Mix",
          name: "Howell",
          gender: "male",
          adopted: false,
          adoptedDate: "",
          about:
            "Fugiat voluptate minim anim incididunt consequat sint eiusmod sunt. Magna exercitation nostrud anim culpa id pariatur ut exercitation dolor. Pariatur ipsum velit aute occaecat cupidatat sunt est non sit cupidatat cillum irure amet. Consectetur commodo id ut excepteur sint consectetur adipisicing quis tempor. Consectetur minim elit officia eiusmod esse cillum cupidatat mollit eu deserunt tempor. Sunt amet ex pariatur culpa nisi magna sit magna dolore adipisicing laborum adipisicing.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "brown",
          breed: "Domestic Medium Hair/Mix",
          name: "Nona",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Adipisicing qui Lorem mollit consectetur reprehenderit dolore eu ex in. Magna velit do irure cupidatat sunt occaecat esse cupidatat labore minim incididunt ea. Proident enim minim duis fugiat ea. Ex minim veniam dolore id in ullamco dolor ut est aliquip. Irure in anim amet quis duis ex velit. Eu commodo laboris deserunt proident pariatur dolor nostrud cillum in. Amet proident ad ea consequat.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "black",
          breed: "Domestic Long Hair/Mix",
          name: "Patrica",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Consequat ullamco excepteur tempor deserunt sit voluptate ut cillum reprehenderit et nulla ut. Exercitation cillum officia veniam ad tempor sunt mollit laborum ex consequat consectetur enim incididunt. Minim cupidatat sint aute culpa laboris fugiat voluptate nisi in dolor. Laborum commodo adipisicing Lorem in occaecat nisi fugiat ipsum ex.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "black",
          breed: "Domestic Medium Hair/Mix",
          name: "Megan",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Fugiat pariatur officia esse do amet deserunt ex sint ullamco reprehenderit excepteur veniam veniam reprehenderit. Anim ex deserunt elit sit eu quis. Amet eu laboris commodo aliquip consectetur excepteur eiusmod nulla anim magna exercitation. Do sunt anim deserunt pariatur officia eu irure quis minim in. Nulla irure eiusmod ad excepteur excepteur duis ipsum pariatur in. Nisi ea commodo laborum adipisicing mollit cupidatat esse aliquip est nisi amet irure eu velit.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "tricolor",
          breed: "Domestic Shorthair/Mix",
          name: "Ila",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-11-06T12:26:51 +07:00",
          about:
            "Est duis aliqua quis in nulla veniam laboris est Lorem ut nulla amet sunt. Ex qui tempor Lorem aliquip. Sit qui laborum esse do tempor sunt cupidatat sunt minim irure cillum consequat ad. Aliquip ipsum eu ea magna cillum pariatur esse dolore irure. Enim voluptate eu quis nisi exercitation ullamco magna aliqua duis esse.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "white",
          breed: "Domestic Shorthair/Mix",
          name: "Monique",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Excepteur sunt id reprehenderit do officia incididunt eiusmod in. Do occaecat anim quis qui proident. Laborum ad exercitation adipisicing occaecat nulla fugiat duis dolor officia proident. Dolor et qui excepteur voluptate ullamco excepteur in reprehenderit.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "tricolor",
          breed: "Domestic Medium Hair/Mix",
          name: "Gould",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-05-26T09:29:06 +07:00",
          about:
            "Tempor sint aliqua in consectetur nulla anim. Consequat cillum dolor esse officia anim irure. Officia magna adipisicing eiusmod eiusmod sunt nostrud laborum Lorem cupidatat minim consectetur duis eiusmod. Sunt cupidatat nulla dolor id anim mollit ullamco dolor consequat eu aute.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "white",
          breed: "Domestic Medium Hair/Mix",
          name: "Merritt",
          gender: "male",
          adopted: false,
          adoptedDate: "",
          about:
            "Elit amet nulla duis occaecat tempor. Amet velit labore ad esse cupidatat. Nulla eiusmod amet sit veniam est Lorem excepteur qui adipisicing excepteur adipisicing dolor. Ipsum laborum tempor ex ullamco occaecat ea anim.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "tricolor",
          breed: "Domestic Medium Hair/Mix",
          name: "Bernadine",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Enim aliqua incididunt consectetur esse dolor veniam pariatur ipsum eu fugiat laborum. Commodo ex tempor nostrud tempor ad ullamco ipsum voluptate fugiat reprehenderit. In in amet veniam minim nulla. Nulla exercitation velit voluptate sunt voluptate amet enim ut elit deserunt ullamco ipsum. Nostrud anim aute consequat pariatur exercitation.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "black",
          breed: "Domestic Long Hair/Mix",
          name: "Greene",
          gender: "male",
          adopted: false,
          adoptedDate: "",
          about:
            "Eiusmod cupidatat ut fugiat non sint laborum ipsum dolor ipsum pariatur do ullamco. Dolore dolor consectetur quis eu fugiat do. Nisi voluptate nulla nostrud nostrud commodo tempor qui dolore cillum sit fugiat aute duis quis.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "white",
          breed: "Domestic Shorthair/Mix",
          name: "Warner",
          gender: "male",
          adopted: false,
          adoptedDate: "",
          about:
            "Cupidatat ut enim adipisicing laborum labore incididunt reprehenderit veniam eiusmod velit. Nostrud velit in magna sunt ex sunt id ex dolor est elit sunt. Aliquip cillum ea nulla tempor exercitation officia cillum minim anim.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "black",
          breed: "Domestic Shorthair/Mix",
          name: "Tina",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-07-14T10:43:39 +07:00",
          about:
            "Deserunt excepteur adipisicing consectetur aute qui et dolor in minim est quis veniam. Exercitation laborum exercitation veniam sit minim consectetur labore sit ad minim ut enim. Lorem nostrud veniam fugiat tempor veniam tempor id aliquip irure cupidatat minim. Mollit in ad enim reprehenderit mollit enim in. Cupidatat consequat esse laborum id esse labore ullamco enim elit. Ea commodo duis mollit exercitation id ad ut laborum reprehenderit esse dolore velit.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "tricolor",
          breed: "Domestic Long Hair/Mix",
          name: "Garrison",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-05-12T07:51:34 +07:00",
          about:
            "In incididunt quis mollit ex Lorem magna. Officia reprehenderit excepteur sit dolor ex aliqua ea. Eiusmod est sit ea nisi veniam adipisicing deserunt reprehenderit id. Magna dolore sint labore est aute deserunt incididunt irure. Esse commodo commodo laboris minim pariatur sunt qui Lorem culpa anim cupidatat irure dolor.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 1,
          color: "tricolor",
          breed: "Domestic Shorthair/Mix",
          name: "Brianna",
          gender: "female",
          adopted: true,
          adoptedDate: "2019-06-15T05:55:03 +07:00",
          about:
            "Exercitation aute reprehenderit dolor non nostrud consectetur anim aliquip irure eu esse nisi. Ut Lorem reprehenderit eu sit sit in consequat. Ullamco irure enim Lorem esse cupidatat exercitation enim in non elit incididunt. Laborum consequat commodo pariatur eu labore pariatur duis nostrud culpa duis velit tempor. Cillum duis quis aute sunt exercitation non Lorem. Irure dolore anim minim ad ex laborum qui non exercitation. Duis veniam aliqua deserunt magna eiusmod.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "white",
          breed: "Domestic Shorthair/Mix",
          name: "Hampton",
          gender: "male",
          adopted: false,
          adoptedDate: "",
          about:
            "Adipisicing labore mollit aliquip proident incididunt ut excepteur. Magna laborum quis est incididunt adipisicing reprehenderit anim aute aliquip. Ut veniam nisi anim aliqua mollit eiusmod eiusmod sunt enim anim ex eiusmod amet voluptate. Deserunt qui pariatur veniam consectetur reprehenderit sit id minim nulla. Id non reprehenderit tempor ea cillum in cupidatat culpa ad deserunt.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "brown",
          breed: "Domestic Shorthair/Mix",
          name: "Delaney",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-11-19T03:40:52 +07:00",
          about:
            "Pariatur id sint minim velit consectetur sunt ad eiusmod. Do nostrud enim occaecat fugiat irure non cupidatat sit magna amet non sint irure consectetur. Cupidatat sunt culpa excepteur laboris.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "tricolor",
          breed: "Domestic Long Hair/Mix",
          name: "Castro",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-02-06T01:37:11 +07:00",
          about:
            "Magna ullamco sit commodo non elit cillum quis ipsum deserunt ipsum labore. Eiusmod mollit Lorem ullamco incididunt officia. Velit do nisi veniam qui amet et. Cillum voluptate magna velit est sit occaecat proident consequat labore fugiat consequat fugiat adipisicing do. Nostrud dolore aliqua consequat labore anim officia voluptate velit exercitation nisi. Magna elit nisi ex sit.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "black",
          breed: "Domestic Long Hair/Mix",
          name: "Glover",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-10-28T08:50:10 +07:00",
          about:
            "Adipisicing veniam irure consectetur officia duis ex cillum pariatur dolore ad non irure anim. Fugiat nisi irure deserunt consectetur cupidatat consectetur officia esse cillum eiusmod est mollit. Tempor nostrud non aute enim aute incididunt minim ut sit. Excepteur commodo laborum fugiat Lorem laborum fugiat eu cillum. Aliquip magna nisi deserunt ex consectetur proident.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "brown",
          breed: "Domestic Long Hair/Mix",
          name: "Bryant",
          gender: "male",
          adopted: true,
          adoptedDate: "2019-08-19T08:41:44 +07:00",
          about:
            "Eu ipsum anim amet officia reprehenderit sit officia proident occaecat consequat do laboris occaecat. Sunt eu dolor fugiat labore commodo ullamco qui velit aliqua consequat. Quis non ea sunt voluptate excepteur. Magna commodo tempor enim nisi. Enim aute qui consequat magna excepteur enim aute aute ex. Fugiat irure minim cupidatat laboris sunt amet irure quis culpa.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 4,
          color: "black",
          breed: "Domestic Long Hair/Mix",
          name: "Debra",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Incididunt ex eu occaecat elit ea sint laborum magna veniam esse ut ut veniam. Elit amet incididunt non pariatur mollit eu elit laboris enim magna incididunt. Veniam sint elit magna consequat proident ut reprehenderit magna cillum cillum ad enim et id. Cillum qui quis amet velit nostrud excepteur sit. Cillum occaecat quis fugiat labore. Occaecat adipisicing nostrud elit elit occaecat Lorem.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "black",
          breed: "Domestic Long Hair/Mix",
          name: "Lana",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Et aliquip sunt nostrud commodo sint ex dolore fugiat exercitation non. Reprehenderit deserunt elit laboris voluptate reprehenderit id occaecat anim excepteur officia est. Voluptate exercitation magna ad sit labore ipsum consequat aliqua adipisicing anim. Non elit incididunt minim dolor ex reprehenderit ut aliquip. Ea magna elit ex amet.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 2,
          color: "black",
          breed: "Domestic Long Hair/Mix",
          name: "Louise",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Ad reprehenderit enim anim id eiusmod. Est ea nulla reprehenderit fugiat amet id incididunt. Veniam nulla nulla eiusmod in sit elit consectetur. Adipisicing voluptate duis irure dolore id qui eu consectetur enim ipsum fugiat consectetur sint dolor.\r\n"
        },
        {
          species: "Cat",
          picture: "http://lorempixel.com/400/400/cats",
          age: 3,
          color: "black",
          breed: "Domestic Shorthair/Mix",
          name: "Madge",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Laborum aliquip irure adipisicing sint incididunt ullamco cupidatat cillum aliqua excepteur dolore mollit in. Cupidatat sit elit adipisicing sint adipisicing ex ad reprehenderit occaecat commodo do do ullamco. Sint sit velit velit ad exercitation nulla nisi veniam cillum. Dolore quis est id elit ex fugiat nulla quis sit Lorem mollit reprehenderit. Deserunt nostrud incididunt anim anim elit ex ipsum officia sint consequat Lorem incididunt quis. Deserunt voluptate fugiat laboris id mollit velit cillum anim irure ad. Veniam non eiusmod non dolore dolore nulla.\r\n"
        },
        {
          adopted: true,
          adoptedDate: "2019-10-15T09:00:10 +07:00",
          species: "Dog",
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
          picture: "https://placedog.net/500/280?id=",
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
