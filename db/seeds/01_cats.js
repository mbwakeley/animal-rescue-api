exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cats")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cats").insert([
        {
          species: "Cat",
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
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
          picture: "http://placehold.it/32x32",
          age: 3,
          color: "black",
          breed: "Domestic Shorthair/Mix",
          name: "Madge",
          gender: "female",
          adopted: false,
          adoptedDate: "",
          about:
            "Laborum aliquip irure adipisicing sint incididunt ullamco cupidatat cillum aliqua excepteur dolore mollit in. Cupidatat sit elit adipisicing sint adipisicing ex ad reprehenderit occaecat commodo do do ullamco. Sint sit velit velit ad exercitation nulla nisi veniam cillum. Dolore quis est id elit ex fugiat nulla quis sit Lorem mollit reprehenderit. Deserunt nostrud incididunt anim anim elit ex ipsum officia sint consequat Lorem incididunt quis. Deserunt voluptate fugiat laboris id mollit velit cillum anim irure ad. Veniam non eiusmod non dolore dolore nulla.\r\n"
        }
      ]);
    });
};
