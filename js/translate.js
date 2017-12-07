function changeLang(lang) {
    console.log(lang)
}

const AVAILABLE_LANGUAGES = ['ge', 'en']

const DICTIONARY = {
    '': {'en': '', 'ge': ''},
    'name': {'en': 'Anano Neparidze', 'ge': 'ანანო ნეფარიძე'},
    'soc_media': {'en': 'Social Media Manager', 'ge': 'სოციალური მედიის მენეჯერი'},
    'edu': {'en': 'Education', 'ge': 'განათლება'},
    'agruni': {'en': 'Agrarian University Of Tbilisi', 'ge': 'თბილისის აგრარული უნივერსიტეტი'},
    'degree': {'en': 'Liberal Arts', 'ge': 'თავისუფალი მეცნიერებები'},
    'date': {'en': 'September 2016 - Present', 'ge': 'სექტემბერი 2016 - დღემდე'},
    'work': {'en': 'Work', 'ge': 'სამუშაო გამოცდილება'},
    'certificates': {'en': 'Certificates', 'ge': 'სერტიფიკატები'},
    'about': {'en': 'About', 'ge': 'ჩემს შესახებ'},
    'about_2': {'en': 'About me', 'ge': 'ჩემს შესახებ'},
    'down_cv': {'small': true, 'en': 'Download resume', 'ge': 'გადმოწერეთ რეზიუმე'},
    'resume': {'en': 'Resume', 'ge': 'რეზიუმე'},
    'contact': {'en': 'Contact', 'ge': 'დამიკავშირდით'},
    'about_me': {
        'small': true,
        'en': 'Hey! I\'m Ano, have a huge passion for writing. Can tell you dumb jokes and I bet you\'ll laugh.',
        'ge': 'გამარჯობა! მე ვარ ანო,  მიყვარს წერა. შემიძლია სულელური ხუმრობები მოგიყვე და ზუსტად ვიცი, გაგეცინება.\n'
    },
    'methodology': {'en': 'Programming Methodology', 'ge': 'პროგრამირების მეთოდოლოგა', 'small': true},
    'abstractions': {'en': 'Programming Abstractions', 'ge': 'პროგრამირების აბსტრაქციები', 'small': true},
    'paradigms': {
        'en': 'Programming Paradigms (Computer Organization & Systems)',
        'ge': 'პროგრამირების პარადიგმები / კომპიუტერების წყობა და სისტემები ', 'small': true
    },
    'rdbms': {
        'en': 'Relational Database Management Systems',
        'ge': 'მონაცემთა ბაზების მართვის რელაციური სისტემები',
        'small': true
    },
    'algo': {'en': 'Algorithms and Data Structures', 'ge': 'მონაცემთა სტრუქტურები და ალგორითმები', 'small': true},
    'oop': {
        'en': 'Object Oriented Programming (Software Engineering)',
        'ge': 'ობიექტზე ორიენტირებული პროგრამირება / პროგრამული უზრუნველყოფის ინჟინერია',
        'small': true
    },
    'coursework': {'en': 'Related Coursework:', 'ge': 'გავლილი კურსები:'},
    'seclead': {'en': 'Teaching Assistant (Section Leader)', 'ge': 'ლექტორის ასისტენტი (სექციის ლიდერი)'},
    'seclead_date': {
        'en': 'March 2017 - July 2017 | October 2017 - present',
        'ge': 'მარტი 2017 - ივლისი 2017 | ოქტომბერი 2017 - დღემდე',
        'small': true
    },
    'seclead_description': {
        'small': true,
        'en': 'Responsible for grading programming homeworks of 8-10 students (functionality, efficiency,' +
        ' styling and documenting), explaining their mistakes and providing consultations\n' +
        '\n' +
        'if necessary.',
        'ge': 'სექციის ლიდერებს ევალებათ კონსულტაციები  გაუწიონ სტუდენტებს კომპიუტერული მეცნიერებების\n' +
        'ძირითად კურსებში და შეაფასონ მათ მიერ შესრულებული დავალებები აღნიშნულ კურსებში' +
        ' ფუნქციონალურობის, ეფექტურობის, სტილის და დოკუმენტაციის მიხედვით.'
    },
    'address': {
        'small': true, 'en': '\n' +
        '              10a Demetre Tavdadebuli Street, Apt &numero;12,<br>\n' +
        '              Tbilisi, 0131, Georgia<br>', 'ge': '\n' +
        '              10ა დემეტრე თავდადებულის ქუჩა, ბ. &numero;12,<br>\n' +
        '              თბილისი, 0131, საქართველო<br>'
    },
    'phone_number': {'en': 'Phone Number', 'ge': 'საკონტაქტო ნომერი', 'small': true},
    'gifts': {'en': 'Send me cool gadgets at', 'ge': 'ამავსეთ საჩუქრებით: '},
    'skills': {'en': 'Skills', 'ge': 'უნარები'},
    'languages': {'en': 'Languages', 'ge': 'ენები'},
    'lang_ge': {'en': 'Georgian', 'ge': 'ქართული'},
    'lang_en': {'en': 'English', 'ge': 'ინგლისური'},
    'lang_ru': {'en': 'Russian', 'ge': 'რუსული'},
    'lang_nat': {'en': 'Native', 'ge': 'მშობლიური'},
    'lang_flu': {'en': 'Fluent', 'ge': 'თავისუფლად'},
    'lang_lim': {'en': 'Limited', 'ge': 'შეზღუდული'},
    'advanced': {'en': 'Advanced', 'ge': 'კარგად'},
    'basic': {'en': 'Basic', 'ge': 'საწყისები'},
    'personal': {'en': 'Personal', 'ge': 'პიროვნული'},
    'office_software': {'en': 'Office Software', 'ge': 'საოფისე პროგრამები'},
    'around_web': {'en': 'Around the Web', 'ge': 'მიპოვეთ ინტერნეტში'},
    'email_me': {'small': true, 'en': 'Email me at', 'ge': 'მომწერეთ ელ-ფოსტაზე '},
    'isi': {'en': 'International Sales Institute', 'ge': 'საერთაშორისო გაყიდვების ინსტიტუტი'},
    'jundev': {'en': 'Junior Web Developer', 'ge': 'უმცროსი ვებ დეველოპერი'},
    'isi_desc': {
        'small': true,
        'en': 'Creating Content for Instagram & Facebook, replying to comments and messages, translating/writing\n' +
        '                  articles & blog posts, management for projects & events.',
        'ge': 'კონტენტის შექმნა ინსტაგრამისა და ფეისბუქის გვერდებისთვის,  შეტყობინებებსა და კომენტარებზე პასუხების გაცემა' +
        ', სტატიების თარგმნა/წერა ბლოგისთვის, საორგანიზაციო საკითხები ღონისძიებებთან დაკავშირებით.'
    }, 'isi_date': {
        'en': '2016 October - 2017 April',
        'ge': 'ოქტომბერი 2016 - აპრილი 2017',
        'small': true
    },
    'vaporia_name': {'en': 'LTD "Vaporia"', 'ge': 'შპს. "ვეიფორია"'},
    'vaporia_descr': {
        'small': true,
        'en': 'Creating Content for Instagram & Facebook, taking photos, translating various information & articles.',
        'ge': 'კონტენტის შექმნა ინსტაგრამისა და ფეისბუქ გვერდებისთვის, ფოტოების გადაღება, სხვადასხვა ინფორმაციისა და სტატიების თარგმნა.'
    },
    'vaporia_date': {
        'small': true,
        'en': '2016 December - present',
        'ge': 'დეკემბერი 2016 - დღემდე'
    },
    'cpywrt': {'en': 'Copywriter', 'ge': 'ქოფირაითერი'},
    'bookgeo_descr': {
        'small': true,
        'en': 'Writing articles about Georgia in English.\n',
        'ge': 'სტატიების წერა ინგლისურად საქართველოს სხვადასხვა კუთხეზე.'
    }, 'bookgeo_date': {'en': '2017 August - present', 'ge': 'აგვისტო 2017 - დღემდე', 'small': true}

};

function translate(lang) {
    function removeLanguages($, args) {
        for (var i in args) {

            jQuery(this).removeClass('lang-' + args[i]);

            jQuery(this).removeClass('lang-' + args[i] + '-small');
        }
    }

    $('.lang').each(function (index, element) {
        var key = $(this).attr('key');
        removeLanguages($(this), AVAILABLE_LANGUAGES);

        try {

            $(this).html(DICTIONARY[key][lang]);

            $(this).addClass('lang-' + lang + (DICTIONARY[key]['small'] === true ? '-small' : ''));
        } catch (e) {
            console.log($(this)[0]);
            console.error(key)
        }
    });

}

function initTranslation() {

    $('.translate').click(function () {
        var lang = $(this).attr('id');
        translate(lang);
    });
    var currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (AVAILABLE_LANGUAGES.indexOf(currentLang.toLowerCase()) !== -1) {
        translate(currentLang);
    }
}
