function changeLang(lang) {
    console.log(lang)
}

const AVAILABLE_LANGUAGES = ['ge', 'en']

const DICTIONARY = {
    'jan': {'en': 'January', 'ge': 'იანვარი', 'small': true},
    'feb': {'en': 'February', 'ge': 'თებერვალი', 'small': true},
    'mar': {'en': 'March', 'ge': 'მარტი', 'small': true},
    'apr': {'en': 'April', 'ge': 'აპრილი', 'small': true},
    'may': {'en': 'May', 'ge': 'მაისი', 'small': true},
    'jun': {'en': 'June', 'ge': 'ივნისი', 'small': true},
    'jul': {'en': 'July', 'ge': 'ივლისი', 'small': true},
    'aug': {'en': 'August', 'ge': 'აგვისტო', 'small': true},
    'sep': {'en': 'September', 'ge': 'სექტემბერი', 'small': true},
    'oct': {'en': 'October', 'ge': 'ოქტომბერი', 'small': true},
    'nov': {'en': 'November', 'ge': 'ნოემბერი', 'small': true},
    'dec': {'en': 'December', 'ge': 'დეკემბერი', 'small': true},
    'pres': {'en': 'Present', 'ge': 'დღემდე', 'small': true},
    '': {'en': '', 'ge': ''},
    'name': {'en': 'Anano Neparidze', 'ge': 'ანანო ნეფარიძე'},
    'soc_media': {'en': 'Social Media Manager', 'ge': 'სოციალური მედიის მენეჯერი'},
    'copywriter': {'en': 'Copywriter, Freelance illustrator', 'ge': 'ქოფირაითერი, დამოუკიდებელი ილუსტრატორი'},
    'edu': {'en': 'Education', 'ge': 'განათლება'},
    'agruni': {'en': 'Agricultural University of Georgia', 'ge': 'საქართველოს აგრარული უნივერსიტეტი'},
    'degree': {'en': 'Liberal Arts, Bachelor\'s Degree', 'ge': 'თავისუფალი მეცნიერებები, ბაკალავრის ხარისხი'},
    'date': {'en': 'September 2016 - Present', 'ge': 'სექტემბერი 2016 - დღემდე'},
    'iowa_school': {'en': 'Iowa State Norwalk Public School', 'ge': 'აიოვას შტატის ნორვალკის საჯარო სკოლა'},
    'demirel': {'en': 'Private Demirel College', 'ge': 'დემირელის სახელობის კერძო კოლეჯი'},
    'geolab': {'en': 'GeoLab', 'ge': 'ჯეოლაბი'},
    'geolab_cert': {
        'en': 'Basic Course - Social Media Management',
        'ge': 'საბაზისო კურსი - სოციალური მედია მენეჯმენტი',
        'small': true
    },
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
    },
    'bookgeo_date': {'en': '2017 August - present', 'ge': 'აგვისტო 2017 - დღემდე', 'small': true},
    'hammock': {'en': 'Hammock Magazine', 'ge': 'ჟურნალი Hammock'},
    'hammock_position': {'en': 'Author Intern', 'ge': 'სტაჟირება, ავტორი'},
    'area_position': {'en': 'Blogger', 'ge': 'ბლოგერი'},
    'at_position': {'en': 'Freelance Graphic Designer', 'ge': 'დამოუკიდებელი გრაფიკული დიზაინერი'},
    'nduo': {
        'en': 'Social Media Manager, Photographer, Graphic Designer',
        'ge': 'სოციალური მედიის მენეჯერი, ფოტოგრაფი, გრაფიკული დიზაინერი'
    },
    'smartfish_cert': {'en': 'Graphics Design course', 'ge': 'გრაფიკული დიზაინის კურსი'},
    'portfolio': {'en': 'Portfolio', 'ge': 'პორტფოლიო'}

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
