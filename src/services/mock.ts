import convertAsteroidsToSorted from '../helpers/convertAsteroidsToSorted';
import { INasaNeoApiResponse } from '../models/NasaNeoApiResponseDTO';
import { IAsteroidDTO } from '@/models/Asteroid';

const nearObjects: INasaNeoApiResponse = {
    links: {
        next: 'http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-04&end_date=2023-11-11&detailed=false&api_key=DEMO_KEY',
        previous:
            'http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-10-21&end_date=2023-10-28&detailed=false&api_key=DEMO_KEY',
        self: 'http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-10-28&end_date=2023-11-04&detailed=false&api_key=DEMO_KEY',
    },
    element_count: 102,
    near_earth_objects: {
        '2023-10-30': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2164294?api_key=DEMO_KEY',
                },
                id: '2164294',
                neo_reference_id: '2164294',
                name: '164294 (2004 XZ130)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2164294',
                absolute_magnitude_h: 20.45,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.2160503512,
                        estimated_diameter_max: 0.4831032718,
                    },
                    meters: {
                        estimated_diameter_min: 216.0503511964,
                        estimated_diameter_max: 483.1032718379,
                    },
                    miles: {
                        estimated_diameter_min: 0.1342474228,
                        estimated_diameter_max: 0.3001863631,
                    },
                    feet: {
                        estimated_diameter_min: 708.8266342193,
                        estimated_diameter_max: 1584.9845383766,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 10:16',
                        epoch_date_close_approach: 1698660960000,
                        relative_velocity: {
                            kilometers_per_second: '16.2116557352',
                            kilometers_per_hour: '58361.9606467744',
                            miles_per_hour: '36263.8527141027',
                        },
                        miss_distance: {
                            astronomical: '0.3150225768',
                            lunar: '122.5437823752',
                            kilometers: '47126706.491191416',
                            miles: '29283177.5346409008',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2525229?api_key=DEMO_KEY',
                },
                id: '2525229',
                neo_reference_id: '2525229',
                name: '525229 (2004 UU1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2525229',
                absolute_magnitude_h: 21.25,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1494703242,
                        estimated_diameter_max: 0.3342258056,
                    },
                    meters: {
                        estimated_diameter_min: 149.4703242356,
                        estimated_diameter_max: 334.2258056097,
                    },
                    miles: {
                        estimated_diameter_min: 0.0928765248,
                        estimated_diameter_max: 0.2076782231,
                    },
                    feet: {
                        estimated_diameter_min: 490.3882185651,
                        estimated_diameter_max: 1096.5413920766,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 10:41',
                        epoch_date_close_approach: 1698662460000,
                        relative_velocity: {
                            kilometers_per_second: '17.4276433561',
                            kilometers_per_hour: '62739.5160818027',
                            miles_per_hour: '38983.8954231623',
                        },
                        miss_distance: {
                            astronomical: '0.0272529508',
                            lunar: '10.6013978612',
                            kilometers: '4076983.390894796',
                            miles: '2533320.0074923448',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3092138?api_key=DEMO_KEY',
                },
                id: '3092138',
                neo_reference_id: '3092138',
                name: '(1995 FO)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3092138',
                absolute_magnitude_h: 20.98,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1692602495,
                        estimated_diameter_max: 0.3784774237,
                    },
                    meters: {
                        estimated_diameter_min: 169.2602494573,
                        estimated_diameter_max: 378.4774236751,
                    },
                    miles: {
                        estimated_diameter_min: 0.1051734105,
                        estimated_diameter_max: 0.2351748952,
                    },
                    feet: {
                        estimated_diameter_min: 555.3157968296,
                        estimated_diameter_max: 1241.7238706904,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 00:58',
                        epoch_date_close_approach: 1698627480000,
                        relative_velocity: {
                            kilometers_per_second: '5.2268687347',
                            kilometers_per_hour: '18816.727444917',
                            miles_per_hour: '11691.9826726486',
                        },
                        miss_distance: {
                            astronomical: '0.2854030726',
                            lunar: '111.0217952414',
                            kilometers: '42695691.752415362',
                            miles: '26529872.6484095156',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3262569?api_key=DEMO_KEY',
                },
                id: '3262569',
                neo_reference_id: '3262569',
                name: '(2004 WC1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3262569',
                absolute_magnitude_h: 26.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0160160338,
                        estimated_diameter_max: 0.0358129403,
                    },
                    meters: {
                        estimated_diameter_min: 16.0160337979,
                        estimated_diameter_max: 35.8129403019,
                    },
                    miles: {
                        estimated_diameter_min: 0.0099518989,
                        estimated_diameter_max: 0.0222531225,
                    },
                    feet: {
                        estimated_diameter_min: 52.5460443254,
                        estimated_diameter_max: 117.4965270602,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 06:05',
                        epoch_date_close_approach: 1698645900000,
                        relative_velocity: {
                            kilometers_per_second: '10.1783289474',
                            kilometers_per_hour: '36641.9842107707',
                            miles_per_hour: '22767.9040225203',
                        },
                        miss_distance: {
                            astronomical: '0.2042448661',
                            lunar: '79.4512529129',
                            kilometers: '30554596.926995207',
                            miles: '18985746.1496875766',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3408583?api_key=DEMO_KEY',
                },
                id: '3408583',
                neo_reference_id: '3408583',
                name: '(2008 GP3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3408583',
                absolute_magnitude_h: 25.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0231502122,
                        estimated_diameter_max: 0.0517654482,
                    },
                    meters: {
                        estimated_diameter_min: 23.150212221,
                        estimated_diameter_max: 51.7654482198,
                    },
                    miles: {
                        estimated_diameter_min: 0.0143848705,
                        estimated_diameter_max: 0.0321655483,
                    },
                    feet: {
                        estimated_diameter_min: 75.9521422633,
                        estimated_diameter_max: 169.8341531374,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 21:34',
                        epoch_date_close_approach: 1698701640000,
                        relative_velocity: {
                            kilometers_per_second: '18.4094901206',
                            kilometers_per_hour: '66274.164434092',
                            miles_per_hour: '41180.1884507279',
                        },
                        miss_distance: {
                            astronomical: '0.201920719',
                            lunar: '78.547159691',
                            kilometers: '30206909.47126853',
                            miles: '18769703.182744514',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3564854?api_key=DEMO_KEY',
                },
                id: '3564854',
                neo_reference_id: '3564854',
                name: '(2011 JY1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3564854',
                absolute_magnitude_h: 24.6,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0319561887,
                        estimated_diameter_max: 0.0714562102,
                    },
                    meters: {
                        estimated_diameter_min: 31.9561886721,
                        estimated_diameter_max: 71.4562101727,
                    },
                    miles: {
                        estimated_diameter_min: 0.0198566489,
                        estimated_diameter_max: 0.0444008168,
                    },
                    feet: {
                        estimated_diameter_min: 104.8431420431,
                        estimated_diameter_max: 234.436392583,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 02:27',
                        epoch_date_close_approach: 1698632820000,
                        relative_velocity: {
                            kilometers_per_second: '20.7586605339',
                            kilometers_per_hour: '74731.17792209',
                            miles_per_hour: '46435.047748312',
                        },
                        miss_distance: {
                            astronomical: '0.3065166549',
                            lunar: '119.2349787561',
                            kilometers: '45854238.692565063',
                            miles: '28492502.7086533494',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3651225?api_key=DEMO_KEY',
                },
                id: '3651225',
                neo_reference_id: '3651225',
                name: '(2013 UK)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3651225',
                absolute_magnitude_h: 23.23,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0600558028,
                        estimated_diameter_max: 0.1342888574,
                    },
                    meters: {
                        estimated_diameter_min: 60.0558027725,
                        estimated_diameter_max: 134.2888574426,
                    },
                    miles: {
                        estimated_diameter_min: 0.0373169342,
                        estimated_diameter_max: 0.0834432016,
                    },
                    feet: {
                        estimated_diameter_min: 197.033479968,
                        estimated_diameter_max: 440.5802550519,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 21:15',
                        epoch_date_close_approach: 1698700500000,
                        relative_velocity: {
                            kilometers_per_second: '5.7262730501',
                            kilometers_per_hour: '20614.582980388',
                            miles_per_hour: '12809.1001857861',
                        },
                        miss_distance: {
                            astronomical: '0.2371888313',
                            lunar: '92.2664553757',
                            kilometers: '35482943.950269331',
                            miles: '22048078.9876895278',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3694130?api_key=DEMO_KEY',
                },
                id: '3694130',
                neo_reference_id: '3694130',
                name: '(2014 UX34)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3694130',
                absolute_magnitude_h: 22.46,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0856160085,
                        estimated_diameter_max: 0.1914432149,
                    },
                    meters: {
                        estimated_diameter_min: 85.6160084723,
                        estimated_diameter_max: 191.4432149063,
                    },
                    miles: {
                        estimated_diameter_min: 0.0531993048,
                        estimated_diameter_max: 0.1189572619,
                    },
                    feet: {
                        estimated_diameter_min: 280.8924252363,
                        estimated_diameter_max: 628.0945571932,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 18:40',
                        epoch_date_close_approach: 1698691200000,
                        relative_velocity: {
                            kilometers_per_second: '31.9844079683',
                            kilometers_per_hour: '115143.8686858541',
                            miles_per_hour: '71545.9221842742',
                        },
                        miss_distance: {
                            astronomical: '0.2390670714',
                            lunar: '92.9970907746',
                            kilometers: '35763924.668577918',
                            miles: '22222672.3100465484',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3733147?api_key=DEMO_KEY',
                },
                id: '3733147',
                neo_reference_id: '3733147',
                name: '(2015 VR1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3733147',
                absolute_magnitude_h: 21.0,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1677084622,
                        estimated_diameter_max: 0.3750075218,
                    },
                    meters: {
                        estimated_diameter_min: 167.7084621628,
                        estimated_diameter_max: 375.0075217981,
                    },
                    miles: {
                        estimated_diameter_min: 0.1042091748,
                        estimated_diameter_max: 0.2330187988,
                    },
                    feet: {
                        estimated_diameter_min: 550.2246310023,
                        estimated_diameter_max: 1230.3396778159,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 09:53',
                        epoch_date_close_approach: 1698659580000,
                        relative_velocity: {
                            kilometers_per_second: '9.8663433525',
                            kilometers_per_hour: '35518.8360688838',
                            miles_per_hour: '22070.023445135',
                        },
                        miss_distance: {
                            astronomical: '0.4562624952',
                            lunar: '177.4861106328',
                            kilometers: '68255897.442805224',
                            miles: '42412247.9888871312',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3788075?api_key=DEMO_KEY',
                },
                id: '3788075',
                neo_reference_id: '3788075',
                name: '(2017 UP6)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3788075',
                absolute_magnitude_h: 26.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0160160338,
                        estimated_diameter_max: 0.0358129403,
                    },
                    meters: {
                        estimated_diameter_min: 16.0160337979,
                        estimated_diameter_max: 35.8129403019,
                    },
                    miles: {
                        estimated_diameter_min: 0.0099518989,
                        estimated_diameter_max: 0.0222531225,
                    },
                    feet: {
                        estimated_diameter_min: 52.5460443254,
                        estimated_diameter_max: 117.4965270602,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 11:27',
                        epoch_date_close_approach: 1698665220000,
                        relative_velocity: {
                            kilometers_per_second: '16.8220221964',
                            kilometers_per_hour: '60559.2799072193',
                            miles_per_hour: '37629.1814512386',
                        },
                        miss_distance: {
                            astronomical: '0.1502845986',
                            lunar: '58.4607088554',
                            kilometers: '22482255.844364982',
                            miles: '13969825.9922494716',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3789480?api_key=DEMO_KEY',
                },
                id: '3789480',
                neo_reference_id: '3789480',
                name: '(2017 WO1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3789480',
                absolute_magnitude_h: 24.34,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0360209346,
                        estimated_diameter_max: 0.0805452583,
                    },
                    meters: {
                        estimated_diameter_min: 36.0209345803,
                        estimated_diameter_max: 80.5452583346,
                    },
                    miles: {
                        estimated_diameter_min: 0.0223823641,
                        estimated_diameter_max: 0.0500484877,
                    },
                    feet: {
                        estimated_diameter_min: 118.1789230084,
                        estimated_diameter_max: 264.2561053545,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 10:33',
                        epoch_date_close_approach: 1698661980000,
                        relative_velocity: {
                            kilometers_per_second: '7.4796833431',
                            kilometers_per_hour: '26926.8600352538',
                            miles_per_hour: '16731.3036702387',
                        },
                        miss_distance: {
                            astronomical: '0.1453530091',
                            lunar: '56.5423205399',
                            kilometers: '21744500.559450617',
                            miles: '13511406.1154158346',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3893858?api_key=DEMO_KEY',
                },
                id: '3893858',
                neo_reference_id: '3893858',
                name: '(2019 XN)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3893858',
                absolute_magnitude_h: 27.7,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0076657557,
                        estimated_diameter_max: 0.0171411509,
                    },
                    meters: {
                        estimated_diameter_min: 7.6657557353,
                        estimated_diameter_max: 17.1411509231,
                    },
                    miles: {
                        estimated_diameter_min: 0.0047632783,
                        estimated_diameter_max: 0.0106510141,
                    },
                    feet: {
                        estimated_diameter_min: 25.1501180466,
                        estimated_diameter_max: 56.2373735944,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 19:18',
                        epoch_date_close_approach: 1698693480000,
                        relative_velocity: {
                            kilometers_per_second: '22.2463336638',
                            kilometers_per_hour: '80086.8011898359',
                            miles_per_hour: '49762.8237726511',
                        },
                        miss_distance: {
                            astronomical: '0.4075924353',
                            lunar: '158.5534573317',
                            kilometers: '60974960.148992811',
                            miles: '37888083.3428143518',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54075994?api_key=DEMO_KEY',
                },
                id: '54075994',
                neo_reference_id: '54075994',
                name: '(2020 TB9)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54075994',
                absolute_magnitude_h: 25.7,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0192555078,
                        estimated_diameter_max: 0.0430566244,
                    },
                    meters: {
                        estimated_diameter_min: 19.2555078188,
                        estimated_diameter_max: 43.0566244241,
                    },
                    miles: {
                        estimated_diameter_min: 0.0119648141,
                        estimated_diameter_max: 0.0267541378,
                    },
                    feet: {
                        estimated_diameter_min: 63.1742402722,
                        estimated_diameter_max: 141.2618956756,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 16:00',
                        epoch_date_close_approach: 1698681600000,
                        relative_velocity: {
                            kilometers_per_second: '10.0452766822',
                            kilometers_per_hour: '36162.9960559322',
                            miles_per_hour: '22470.2794104208',
                        },
                        miss_distance: {
                            astronomical: '0.1630869612',
                            lunar: '63.4408279068',
                            kilometers: '24397462.020292644',
                            miles: '15159879.9264367272',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54135431?api_key=DEMO_KEY',
                },
                id: '54135431',
                neo_reference_id: '54135431',
                name: '(2021 GV3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54135431',
                absolute_magnitude_h: 25.24,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0237987955,
                        estimated_diameter_max: 0.0532157244,
                    },
                    meters: {
                        estimated_diameter_min: 23.7987954683,
                        estimated_diameter_max: 53.2157244498,
                    },
                    miles: {
                        estimated_diameter_min: 0.0147878813,
                        estimated_diameter_max: 0.0330667079,
                    },
                    feet: {
                        estimated_diameter_min: 78.0800401242,
                        estimated_diameter_max: 174.5922774037,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 22:03',
                        epoch_date_close_approach: 1698703380000,
                        relative_velocity: {
                            kilometers_per_second: '9.6557925409',
                            kilometers_per_hour: '34760.8531473002',
                            miles_per_hour: '21599.0423347766',
                        },
                        miss_distance: {
                            astronomical: '0.1382096332',
                            lunar: '53.7635473148',
                            kilometers: '20675866.740201284',
                            miles: '12847387.8510703592',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54254428?api_key=DEMO_KEY',
                },
                id: '54254428',
                neo_reference_id: '54254428',
                name: '(2022 EX4)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54254428',
                absolute_magnitude_h: 24.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0291443905,
                        estimated_diameter_max: 0.0651688382,
                    },
                    meters: {
                        estimated_diameter_min: 29.1443904535,
                        estimated_diameter_max: 65.1688382168,
                    },
                    miles: {
                        estimated_diameter_min: 0.018109479,
                        estimated_diameter_max: 0.0404940262,
                    },
                    feet: {
                        estimated_diameter_min: 95.6180819754,
                        estimated_diameter_max: 213.8085311752,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 09:50',
                        epoch_date_close_approach: 1698659400000,
                        relative_velocity: {
                            kilometers_per_second: '9.9646880577',
                            kilometers_per_hour: '35872.8770076443',
                            miles_per_hour: '22290.0107162221',
                        },
                        miss_distance: {
                            astronomical: '0.2128058552',
                            lunar: '82.7814776728',
                            kilometers: '31835302.661448424',
                            miles: '19781539.7916352912',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54354660?api_key=DEMO_KEY',
                },
                id: '54354660',
                neo_reference_id: '54354660',
                name: '(2023 HG1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54354660',
                absolute_magnitude_h: 26.33,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0144063837,
                        estimated_diameter_max: 0.0322136532,
                    },
                    meters: {
                        estimated_diameter_min: 14.4063836669,
                        estimated_diameter_max: 32.2136531891,
                    },
                    miles: {
                        estimated_diameter_min: 0.008951709,
                        estimated_diameter_max: 0.0200166299,
                    },
                    feet: {
                        estimated_diameter_min: 47.2650397896,
                        estimated_diameter_max: 105.6878419288,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 08:52',
                        epoch_date_close_approach: 1698655920000,
                        relative_velocity: {
                            kilometers_per_second: '2.6534790753',
                            kilometers_per_hour: '9552.5246711229',
                            miles_per_hour: '5935.5673435653',
                        },
                        miss_distance: {
                            astronomical: '0.1276122665',
                            lunar: '49.6411716685',
                            kilometers: '19090523.254272355',
                            miles: '11862301.087994299',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54357787?api_key=DEMO_KEY',
                },
                id: '54357787',
                neo_reference_id: '54357787',
                name: '(2023 JA1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54357787',
                absolute_magnitude_h: 26.56,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0129585073,
                        estimated_diameter_max: 0.0289761031,
                    },
                    meters: {
                        estimated_diameter_min: 12.9585072669,
                        estimated_diameter_max: 28.9761031358,
                    },
                    miles: {
                        estimated_diameter_min: 0.0080520406,
                        estimated_diameter_max: 0.0180049102,
                    },
                    feet: {
                        estimated_diameter_min: 42.5147889817,
                        estimated_diameter_max: 95.0659582121,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 18:26',
                        epoch_date_close_approach: 1698690360000,
                        relative_velocity: {
                            kilometers_per_second: '7.2954873033',
                            kilometers_per_hour: '26263.7542918089',
                            miles_per_hour: '16319.2755487076',
                        },
                        miss_distance: {
                            astronomical: '0.2550238969',
                            lunar: '99.2042958941',
                            kilometers: '38151031.775339603',
                            miles: '23705951.8856004014',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54359129?api_key=DEMO_KEY',
                },
                id: '54359129',
                neo_reference_id: '54359129',
                name: '(2023 JQ5)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54359129',
                absolute_magnitude_h: 24.34,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0360209346,
                        estimated_diameter_max: 0.0805452583,
                    },
                    meters: {
                        estimated_diameter_min: 36.0209345803,
                        estimated_diameter_max: 80.5452583346,
                    },
                    miles: {
                        estimated_diameter_min: 0.0223823641,
                        estimated_diameter_max: 0.0500484877,
                    },
                    feet: {
                        estimated_diameter_min: 118.1789230084,
                        estimated_diameter_max: 264.2561053545,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-30',
                        close_approach_date_full: '2023-Oct-30 22:10',
                        epoch_date_close_approach: 1698703800000,
                        relative_velocity: {
                            kilometers_per_second: '5.9079312283',
                            kilometers_per_hour: '21268.5524217808',
                            miles_per_hour: '13215.4513645226',
                        },
                        miss_distance: {
                            astronomical: '0.2778911243',
                            lunar: '108.0996473527',
                            kilometers: '41571920.287185241',
                            miles: '25831593.4395526858',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-10-31': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3564590?api_key=DEMO_KEY',
                },
                id: '3564590',
                neo_reference_id: '3564590',
                name: '(2011 JA)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3564590',
                absolute_magnitude_h: 21.41,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.138852907,
                        estimated_diameter_max: 0.310484539,
                    },
                    meters: {
                        estimated_diameter_min: 138.852907036,
                        estimated_diameter_max: 310.4845390059,
                    },
                    miles: {
                        estimated_diameter_min: 0.0862791697,
                        estimated_diameter_max: 0.1929260885,
                    },
                    feet: {
                        estimated_diameter_min: 455.5541715199,
                        estimated_diameter_max: 1018.650094952,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 14:15',
                        epoch_date_close_approach: 1698761700000,
                        relative_velocity: {
                            kilometers_per_second: '23.2594411044',
                            kilometers_per_hour: '83733.9879757982',
                            miles_per_hour: '52029.0438064064',
                        },
                        miss_distance: {
                            astronomical: '0.21061131',
                            lunar: '81.92779959',
                            kilometers: '31507003.3739097',
                            miles: '19577544.07376586',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3752454?api_key=DEMO_KEY',
                },
                id: '3752454',
                neo_reference_id: '3752454',
                name: '(2016 HV3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3752454',
                absolute_magnitude_h: 20.09,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.2550086879,
                        estimated_diameter_max: 0.5702167609,
                    },
                    meters: {
                        estimated_diameter_min: 255.0086878569,
                        estimated_diameter_max: 570.2167609011,
                    },
                    miles: {
                        estimated_diameter_min: 0.1584550034,
                        estimated_diameter_max: 0.3543161589,
                    },
                    feet: {
                        estimated_diameter_min: 836.6427034685,
                        estimated_diameter_max: 1870.7899578349,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 11:38',
                        epoch_date_close_approach: 1698752280000,
                        relative_velocity: {
                            kilometers_per_second: '15.3833626473',
                            kilometers_per_hour: '55380.1055303023',
                            miles_per_hour: '34411.0439057592',
                        },
                        miss_distance: {
                            astronomical: '0.0709966699',
                            lunar: '27.6177045911',
                            kilometers: '10620950.594133113',
                            miles: '6599552.6738704394',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3836413?api_key=DEMO_KEY',
                },
                id: '3836413',
                neo_reference_id: '3836413',
                name: '(2018 WE2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3836413',
                absolute_magnitude_h: 25.85,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0179702855,
                        estimated_diameter_max: 0.0401827799,
                    },
                    meters: {
                        estimated_diameter_min: 17.9702854859,
                        estimated_diameter_max: 40.1827799216,
                    },
                    miles: {
                        estimated_diameter_min: 0.0111662143,
                        estimated_diameter_max: 0.0249684141,
                    },
                    feet: {
                        estimated_diameter_min: 58.9576314336,
                        estimated_diameter_max: 131.833271678,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 08:04',
                        epoch_date_close_approach: 1698739440000,
                        relative_velocity: {
                            kilometers_per_second: '14.3450327031',
                            kilometers_per_hour: '51642.1177312309',
                            miles_per_hour: '32088.4036536085',
                        },
                        miss_distance: {
                            astronomical: '0.3335305345',
                            lunar: '129.7433779205',
                            kilometers: '49895457.541161515',
                            miles: '31003599.660058307',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54054746?api_key=DEMO_KEY',
                },
                id: '54054746',
                neo_reference_id: '54054746',
                name: '(2020 TE)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54054746',
                absolute_magnitude_h: 24.77,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0295498293,
                        estimated_diameter_max: 0.0660754271,
                    },
                    meters: {
                        estimated_diameter_min: 29.5498293111,
                        estimated_diameter_max: 66.0754270632,
                    },
                    miles: {
                        estimated_diameter_min: 0.018361407,
                        estimated_diameter_max: 0.0410573542,
                    },
                    feet: {
                        estimated_diameter_min: 96.9482619972,
                        estimated_diameter_max: 216.7829041261,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 16:22',
                        epoch_date_close_approach: 1698769320000,
                        relative_velocity: {
                            kilometers_per_second: '17.9181606749',
                            kilometers_per_hour: '64505.3784295518',
                            miles_per_hour: '40081.133613629',
                        },
                        miss_distance: {
                            astronomical: '0.4765233627',
                            lunar: '185.3675880903',
                            kilometers: '71286880.065157449',
                            miles: '44295613.2576088362',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54075321?api_key=DEMO_KEY',
                },
                id: '54075321',
                neo_reference_id: '54075321',
                name: '(2020 UU1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54075321',
                absolute_magnitude_h: 28.5,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0053034072,
                        estimated_diameter_max: 0.0118587791,
                    },
                    meters: {
                        estimated_diameter_min: 5.3034072332,
                        estimated_diameter_max: 11.8587790858,
                    },
                    miles: {
                        estimated_diameter_min: 0.0032953835,
                        estimated_diameter_max: 0.0073687014,
                    },
                    feet: {
                        estimated_diameter_min: 17.3996305869,
                        estimated_diameter_max: 38.9067567758,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 18:42',
                        epoch_date_close_approach: 1698777720000,
                        relative_velocity: {
                            kilometers_per_second: '20.7650240186',
                            kilometers_per_hour: '74754.0864670262',
                            miles_per_hour: '46449.2822272475',
                        },
                        miss_distance: {
                            astronomical: '0.2698341184',
                            lunar: '104.9654720576',
                            kilometers: '40366609.365967808',
                            miles: '25082647.9621714304',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54087760?api_key=DEMO_KEY',
                },
                id: '54087760',
                neo_reference_id: '54087760',
                name: '(2020 VT3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54087760',
                absolute_magnitude_h: 28.9,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.004411182,
                        estimated_diameter_max: 0.0098637028,
                    },
                    meters: {
                        estimated_diameter_min: 4.411182,
                        estimated_diameter_max: 9.8637028131,
                    },
                    miles: {
                        estimated_diameter_min: 0.0027409806,
                        estimated_diameter_max: 0.0061290189,
                    },
                    feet: {
                        estimated_diameter_min: 14.4723823528,
                        estimated_diameter_max: 32.3612307372,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 00:52',
                        epoch_date_close_approach: 1698713520000,
                        relative_velocity: {
                            kilometers_per_second: '16.4481371008',
                            kilometers_per_hour: '59213.2935627871',
                            miles_per_hour: '36792.8378807218',
                        },
                        miss_distance: {
                            astronomical: '0.2487241905',
                            lunar: '96.7537101045',
                            kilometers: '37208609.116274235',
                            miles: '23120357.599625043',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54144375?api_key=DEMO_KEY',
                },
                id: '54144375',
                neo_reference_id: '54144375',
                name: '(2021 JA4)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54144375',
                absolute_magnitude_h: 22.29,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0925880583,
                        estimated_diameter_max: 0.2070331923,
                    },
                    meters: {
                        estimated_diameter_min: 92.5880583366,
                        estimated_diameter_max: 207.0331923453,
                    },
                    miles: {
                        estimated_diameter_min: 0.0575315344,
                        estimated_diameter_max: 0.1286444218,
                    },
                    feet: {
                        estimated_diameter_min: 303.766605313,
                        estimated_diameter_max: 679.2427787741,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 19:01',
                        epoch_date_close_approach: 1698778860000,
                        relative_velocity: {
                            kilometers_per_second: '15.4083344867',
                            kilometers_per_hour: '55470.0041522248',
                            miles_per_hour: '34466.9034133643',
                        },
                        miss_distance: {
                            astronomical: '0.0708089972',
                            lunar: '27.5446999108',
                            kilometers: '10592875.157955964',
                            miles: '6582107.4067777432',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54214728?api_key=DEMO_KEY',
                },
                id: '54214728',
                neo_reference_id: '54214728',
                name: '(2021 UN7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54214728',
                absolute_magnitude_h: 23.32,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0576175751,
                        estimated_diameter_max: 0.1288368146,
                    },
                    meters: {
                        estimated_diameter_min: 57.6175751061,
                        estimated_diameter_max: 128.836814636,
                    },
                    miles: {
                        estimated_diameter_min: 0.0358018903,
                        estimated_diameter_max: 0.0800554603,
                    },
                    feet: {
                        estimated_diameter_min: 189.0340451111,
                        estimated_diameter_max: 422.6929749302,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 15:55',
                        epoch_date_close_approach: 1698767700000,
                        relative_velocity: {
                            kilometers_per_second: '15.3048039436',
                            kilometers_per_hour: '55097.2941969517',
                            miles_per_hour: '34235.3159414337',
                        },
                        miss_distance: {
                            astronomical: '0.0981998683',
                            lunar: '38.1997487687',
                            kilometers: '14690491.131960521',
                            miles: '9128247.9069203498',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54340429?api_key=DEMO_KEY',
                },
                id: '54340429',
                neo_reference_id: '54340429',
                name: '(2023 BT7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54340429',
                absolute_magnitude_h: 23.58,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0511157782,
                        estimated_diameter_max: 0.1142983547,
                    },
                    meters: {
                        estimated_diameter_min: 51.1157781544,
                        estimated_diameter_max: 114.2983546761,
                    },
                    miles: {
                        estimated_diameter_min: 0.0317618622,
                        estimated_diameter_max: 0.0710216829,
                    },
                    feet: {
                        estimated_diameter_min: 167.7026896002,
                        estimated_diameter_max: 374.9946139556,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-31',
                        close_approach_date_full: '2023-Oct-31 20:07',
                        epoch_date_close_approach: 1698782820000,
                        relative_velocity: {
                            kilometers_per_second: '10.5739793829',
                            kilometers_per_hour: '38066.3257784213',
                            miles_per_hour: '23652.9344815974',
                        },
                        miss_distance: {
                            astronomical: '0.4112696918',
                            lunar: '159.9839101102',
                            kilometers: '61525069.888836466',
                            miles: '38229905.6846405908',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-11-02': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2241370?api_key=DEMO_KEY',
                },
                id: '2241370',
                neo_reference_id: '2241370',
                name: '241370 (2008 LW8)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2241370',
                absolute_magnitude_h: 17.45,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.8601119401,
                        estimated_diameter_max: 1.9232687664,
                    },
                    meters: {
                        estimated_diameter_min: 860.111940119,
                        estimated_diameter_max: 1923.2687663652,
                    },
                    miles: {
                        estimated_diameter_min: 0.5344486163,
                        estimated_diameter_max: 1.1950634366,
                    },
                    feet: {
                        estimated_diameter_min: 2821.8896576199,
                        estimated_diameter_max: 6309.9370994416,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 01:25',
                        epoch_date_close_approach: 1698888300000,
                        relative_velocity: {
                            kilometers_per_second: '19.7153335328',
                            kilometers_per_hour: '70975.2007182578',
                            miles_per_hour: '44101.2295796308',
                        },
                        miss_distance: {
                            astronomical: '0.3890099719',
                            lunar: '151.3248790691',
                            kilometers: '58195063.204999853',
                            miles: '36160735.4800018514',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2307493?api_key=DEMO_KEY',
                },
                id: '2307493',
                neo_reference_id: '2307493',
                name: '307493 (2002 XP90)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2307493',
                absolute_magnitude_h: 18.6,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.5064714588,
                        estimated_diameter_max: 1.1325046106,
                    },
                    meters: {
                        estimated_diameter_min: 506.4714588346,
                        estimated_diameter_max: 1132.5046106177,
                    },
                    miles: {
                        estimated_diameter_min: 0.3147066768,
                        estimated_diameter_max: 0.7037055224,
                    },
                    feet: {
                        estimated_diameter_min: 1661.651821003,
                        estimated_diameter_max: 3715.566426699,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 09:04',
                        epoch_date_close_approach: 1698915840000,
                        relative_velocity: {
                            kilometers_per_second: '16.1122063357',
                            kilometers_per_hour: '58003.9428084833',
                            miles_per_hour: '36041.3943523045',
                        },
                        miss_distance: {
                            astronomical: '0.3021241431',
                            lunar: '117.5262916659',
                            kilometers: '45197128.283335197',
                            miles: '28084193.2339198386',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2333480?api_key=DEMO_KEY',
                },
                id: '2333480',
                neo_reference_id: '2333480',
                name: '333480 (2004 TC10)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2333480',
                absolute_magnitude_h: 20.32,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.229379698,
                        estimated_diameter_max: 0.5129085974,
                    },
                    meters: {
                        estimated_diameter_min: 229.3796979965,
                        estimated_diameter_max: 512.9085973785,
                    },
                    miles: {
                        estimated_diameter_min: 0.1425298923,
                        estimated_diameter_max: 0.3187065281,
                    },
                    feet: {
                        estimated_diameter_min: 752.5580883747,
                        estimated_diameter_max: 1682.7710426231,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 01:20',
                        epoch_date_close_approach: 1698888000000,
                        relative_velocity: {
                            kilometers_per_second: '10.0059225438',
                            kilometers_per_hour: '36021.3211576962',
                            miles_per_hour: '22382.2481382363',
                        },
                        miss_distance: {
                            astronomical: '0.2613172373',
                            lunar: '101.6524053097',
                            kilometers: '39092502.094364551',
                            miles: '24290954.4149147638',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2363505?api_key=DEMO_KEY',
                },
                id: '2363505',
                neo_reference_id: '2363505',
                name: '363505 (2003 UC20)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2363505',
                absolute_magnitude_h: 18.5,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.5303407233,
                        estimated_diameter_max: 1.1858779086,
                    },
                    meters: {
                        estimated_diameter_min: 530.3407233187,
                        estimated_diameter_max: 1185.8779085771,
                    },
                    miles: {
                        estimated_diameter_min: 0.3295383456,
                        estimated_diameter_max: 0.7368701419,
                    },
                    feet: {
                        estimated_diameter_min: 1739.963058693,
                        estimated_diameter_max: 3890.675677576,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 15:49',
                        epoch_date_close_approach: 1698940140000,
                        relative_velocity: {
                            kilometers_per_second: '7.9705437413',
                            kilometers_per_hour: '28693.9574687991',
                            miles_per_hour: '17829.3092949879',
                        },
                        miss_distance: {
                            astronomical: '0.0351109472',
                            lunar: '13.6581584608',
                            kilometers: '5252522.914802464',
                            miles: '3263766.3963994432',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2390522?api_key=DEMO_KEY',
                },
                id: '2390522',
                neo_reference_id: '2390522',
                name: '390522 (1996 GD1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2390522',
                absolute_magnitude_h: 20.23,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.2390864572,
                        estimated_diameter_max: 0.5346135707,
                    },
                    meters: {
                        estimated_diameter_min: 239.0864571707,
                        estimated_diameter_max: 534.6135707332,
                    },
                    miles: {
                        estimated_diameter_min: 0.148561391,
                        estimated_diameter_max: 0.3321933691,
                    },
                    feet: {
                        estimated_diameter_min: 784.4044121439,
                        estimated_diameter_max: 1753.9815874044,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 09:43',
                        epoch_date_close_approach: 1698918180000,
                        relative_velocity: {
                            kilometers_per_second: '12.9488595016',
                            kilometers_per_hour: '46615.8942058831',
                            miles_per_hour: '28965.3038192055',
                        },
                        miss_distance: {
                            astronomical: '0.0979058162',
                            lunar: '38.0853625018',
                            kilometers: '14646501.564131494',
                            miles: '9100914.0569588572',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3758270?api_key=DEMO_KEY',
                },
                id: '3758270',
                neo_reference_id: '3758270',
                name: '(2016 QE45)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3758270',
                absolute_magnitude_h: 21.78,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1170994827,
                        estimated_diameter_max: 0.2618424035,
                    },
                    meters: {
                        estimated_diameter_min: 117.09948272,
                        estimated_diameter_max: 261.8424034921,
                    },
                    miles: {
                        estimated_diameter_min: 0.0727622227,
                        estimated_diameter_max: 0.1627012761,
                    },
                    feet: {
                        estimated_diameter_min: 384.1846668872,
                        estimated_diameter_max: 859.0630310729,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 13:39',
                        epoch_date_close_approach: 1698932340000,
                        relative_velocity: {
                            kilometers_per_second: '9.4500197963',
                            kilometers_per_hour: '34020.071266675',
                            miles_per_hour: '21138.7492823403',
                        },
                        miss_distance: {
                            astronomical: '0.2484314555',
                            lunar: '96.6398361895',
                            kilometers: '37164816.583799785',
                            miles: '23093146.181755633',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3763944?api_key=DEMO_KEY',
                },
                id: '3763944',
                neo_reference_id: '3763944',
                name: '(2016 WY)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3763944',
                absolute_magnitude_h: 29.2,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0038419789,
                        estimated_diameter_max: 0.008590926,
                    },
                    meters: {
                        estimated_diameter_min: 3.8419789106,
                        estimated_diameter_max: 8.5909260123,
                    },
                    miles: {
                        estimated_diameter_min: 0.0023872943,
                        estimated_diameter_max: 0.0053381523,
                    },
                    feet: {
                        estimated_diameter_min: 12.6049180892,
                        estimated_diameter_max: 28.1854536983,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 10:58',
                        epoch_date_close_approach: 1698922680000,
                        relative_velocity: {
                            kilometers_per_second: '3.9408432785',
                            kilometers_per_hour: '14187.0358027454',
                            miles_per_hour: '8815.272329767',
                        },
                        miss_distance: {
                            astronomical: '0.0232491077',
                            lunar: '9.0439028953',
                            kilometers: '3478016.991320599',
                            miles: '2161139.5450343062',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54016914?api_key=DEMO_KEY',
                },
                id: '54016914',
                neo_reference_id: '54016914',
                name: '(2020 HG9)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016914',
                absolute_magnitude_h: 23.34,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.057089334,
                        estimated_diameter_max: 0.1276556316,
                    },
                    meters: {
                        estimated_diameter_min: 57.0893340024,
                        estimated_diameter_max: 127.6556316195,
                    },
                    miles: {
                        estimated_diameter_min: 0.0354736566,
                        estimated_diameter_max: 0.0793215075,
                    },
                    feet: {
                        estimated_diameter_min: 187.3009705684,
                        estimated_diameter_max: 418.8177024426,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 02:06',
                        epoch_date_close_approach: 1698890760000,
                        relative_velocity: {
                            kilometers_per_second: '18.5220211906',
                            kilometers_per_hour: '66679.276286245',
                            miles_per_hour: '41431.9092013059',
                        },
                        miss_distance: {
                            astronomical: '0.4737872509',
                            lunar: '184.3032406001',
                            kilometers: '70877563.567795583',
                            miles: '44041275.7799337254',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54137811?api_key=DEMO_KEY',
                },
                id: '54137811',
                neo_reference_id: '54137811',
                name: '(2021 GP16)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54137811',
                absolute_magnitude_h: 21.96,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1077841687,
                        estimated_diameter_max: 0.2410127282,
                    },
                    meters: {
                        estimated_diameter_min: 107.7841687222,
                        estimated_diameter_max: 241.0127281611,
                    },
                    miles: {
                        estimated_diameter_min: 0.0669739567,
                        estimated_diameter_max: 0.1497583199,
                    },
                    feet: {
                        estimated_diameter_min: 353.6226121105,
                        estimated_diameter_max: 790.7241990601,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 00:52',
                        epoch_date_close_approach: 1698886320000,
                        relative_velocity: {
                            kilometers_per_second: '11.3208724248',
                            kilometers_per_hour: '40755.1407292292',
                            miles_per_hour: '25323.6595270036',
                        },
                        miss_distance: {
                            astronomical: '0.117745194',
                            lunar: '45.802880466',
                            kilometers: '17614430.22513678',
                            miles: '10945099.410896364',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54192207?api_key=DEMO_KEY',
                },
                id: '54192207',
                neo_reference_id: '54192207',
                name: '(2021 QV6)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54192207',
                absolute_magnitude_h: 22.93,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0689532874,
                        estimated_diameter_max: 0.154184238,
                    },
                    meters: {
                        estimated_diameter_min: 68.9532874451,
                        estimated_diameter_max: 154.1842379994,
                    },
                    miles: {
                        estimated_diameter_min: 0.0428455732,
                        estimated_diameter_max: 0.0958056141,
                    },
                    feet: {
                        estimated_diameter_min: 226.2247035814,
                        estimated_diameter_max: 505.8538153978,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 01:19',
                        epoch_date_close_approach: 1698887940000,
                        relative_velocity: {
                            kilometers_per_second: '10.4476252068',
                            kilometers_per_hour: '37611.450744601',
                            miles_per_hour: '23370.2928251661',
                        },
                        miss_distance: {
                            astronomical: '0.2326138255',
                            lunar: '90.4867781195',
                            kilometers: '34798532.827351685',
                            miles: '21622805.636095853',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54215205?api_key=DEMO_KEY',
                },
                id: '54215205',
                neo_reference_id: '54215205',
                name: '(2021 VH)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54215205',
                absolute_magnitude_h: 29.62,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0031663213,
                        estimated_diameter_max: 0.0070801096,
                    },
                    meters: {
                        estimated_diameter_min: 3.1663212573,
                        estimated_diameter_max: 7.08010957,
                    },
                    miles: {
                        estimated_diameter_min: 0.0019674602,
                        estimated_diameter_max: 0.0043993748,
                    },
                    feet: {
                        estimated_diameter_min: 10.3881934339,
                        estimated_diameter_max: 23.2287066817,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 02:18',
                        epoch_date_close_approach: 1698891480000,
                        relative_velocity: {
                            kilometers_per_second: '3.7640252197',
                            kilometers_per_hour: '13550.4907908482',
                            miles_per_hour: '8419.7480139023',
                        },
                        miss_distance: {
                            astronomical: '0.0647413995',
                            lunar: '25.1844044055',
                            kilometers: '9685175.466019065',
                            miles: '6018088.972090497',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54235433?api_key=DEMO_KEY',
                },
                id: '54235433',
                neo_reference_id: '54235433',
                name: '(2022 AM)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54235433',
                absolute_magnitude_h: 28.18,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0061454682,
                        estimated_diameter_max: 0.0137416847,
                    },
                    meters: {
                        estimated_diameter_min: 6.1454682123,
                        estimated_diameter_max: 13.7416846762,
                    },
                    miles: {
                        estimated_diameter_min: 0.0038186157,
                        estimated_diameter_max: 0.0085386843,
                    },
                    feet: {
                        estimated_diameter_min: 20.1622979296,
                        estimated_diameter_max: 45.0842687532,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 00:51',
                        epoch_date_close_approach: 1698886260000,
                        relative_velocity: {
                            kilometers_per_second: '8.6657138099',
                            kilometers_per_hour: '31196.569715607',
                            miles_per_hour: '19384.3352213448',
                        },
                        miss_distance: {
                            astronomical: '0.3895131266',
                            lunar: '151.5206062474',
                            kilometers: '58270334.076400342',
                            miles: '36207506.6306830396',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54336807?api_key=DEMO_KEY',
                },
                id: '54336807',
                neo_reference_id: '54336807',
                name: '(2022 XO2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54336807',
                absolute_magnitude_h: 23.84,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0453476699,
                        estimated_diameter_max: 0.1014004725,
                    },
                    meters: {
                        estimated_diameter_min: 45.3476698997,
                        estimated_diameter_max: 101.400472517,
                    },
                    miles: {
                        estimated_diameter_min: 0.028177727,
                        estimated_diameter_max: 0.063007313,
                    },
                    feet: {
                        estimated_diameter_min: 148.7784493137,
                        estimated_diameter_max: 332.6787262525,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 14:27',
                        epoch_date_close_approach: 1698935220000,
                        relative_velocity: {
                            kilometers_per_second: '20.7302068849',
                            kilometers_per_hour: '74628.7447856692',
                            miles_per_hour: '46371.3997808509',
                        },
                        miss_distance: {
                            astronomical: '0.217029608',
                            lunar: '84.424517512',
                            kilometers: '32467167.08373496',
                            miles: '20174162.137504048',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54354659?api_key=DEMO_KEY',
                },
                id: '54354659',
                neo_reference_id: '54354659',
                name: '(2023 HF1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54354659',
                absolute_magnitude_h: 23.68,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0488151892,
                        estimated_diameter_max: 0.1091540813,
                    },
                    meters: {
                        estimated_diameter_min: 48.8151891662,
                        estimated_diameter_max: 109.1540813101,
                    },
                    miles: {
                        estimated_diameter_min: 0.0303323429,
                        estimated_diameter_max: 0.0678251807,
                    },
                    feet: {
                        estimated_diameter_min: 160.154825224,
                        estimated_diameter_max: 358.1170761255,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 00:44',
                        epoch_date_close_approach: 1698885840000,
                        relative_velocity: {
                            kilometers_per_second: '2.9868674396',
                            kilometers_per_hour: '10752.7227824897',
                            miles_per_hour: '6681.3237755976',
                        },
                        miss_distance: {
                            astronomical: '0.1958561403',
                            lunar: '76.1880385767',
                            kilometers: '29299661.415301161',
                            miles: '18205965.3816355818',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54359128?api_key=DEMO_KEY',
                },
                id: '54359128',
                neo_reference_id: '54359128',
                name: '(2023 JP5)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54359128',
                absolute_magnitude_h: 23.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.058150704,
                        estimated_diameter_max: 0.130028927,
                    },
                    meters: {
                        estimated_diameter_min: 58.1507039646,
                        estimated_diameter_max: 130.0289270043,
                    },
                    miles: {
                        estimated_diameter_min: 0.0361331611,
                        estimated_diameter_max: 0.0807962044,
                    },
                    feet: {
                        estimated_diameter_min: 190.7831555951,
                        estimated_diameter_max: 426.6041048727,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 08:59',
                        epoch_date_close_approach: 1698915540000,
                        relative_velocity: {
                            kilometers_per_second: '9.8477322942',
                            kilometers_per_hour: '35451.8362591819',
                            miles_per_hour: '22028.3923689345',
                        },
                        miss_distance: {
                            astronomical: '0.3411526857',
                            lunar: '132.7083947373',
                            kilometers: '51035715.125499459',
                            miles: '31712122.8683081742',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54375897?api_key=DEMO_KEY',
                },
                id: '54375897',
                neo_reference_id: '54375897',
                name: '(2023 OP2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54375897',
                absolute_magnitude_h: 22.582,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0809384674,
                        estimated_diameter_max: 0.1809839151,
                    },
                    meters: {
                        estimated_diameter_min: 80.9384674002,
                        estimated_diameter_max: 180.9839151014,
                    },
                    miles: {
                        estimated_diameter_min: 0.0502928164,
                        estimated_diameter_max: 0.1124581563,
                    },
                    feet: {
                        estimated_diameter_min: 265.5461613852,
                        estimated_diameter_max: 593.7792680214,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-02',
                        close_approach_date_full: '2023-Nov-02 19:17',
                        epoch_date_close_approach: 1698952620000,
                        relative_velocity: {
                            kilometers_per_second: '5.7162916838',
                            kilometers_per_hour: '20578.6500615796',
                            miles_per_hour: '12786.7728674299',
                        },
                        miss_distance: {
                            astronomical: '0.1059121078',
                            lunar: '41.1998099342',
                            kilometers: '15844225.734090386',
                            miles: '9845145.3457078868',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-11-01': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2405562?api_key=DEMO_KEY',
                },
                id: '2405562',
                neo_reference_id: '2405562',
                name: '405562 (2005 OJ3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2405562',
                absolute_magnitude_h: 18.23,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.6005580277,
                        estimated_diameter_max: 1.3428885744,
                    },
                    meters: {
                        estimated_diameter_min: 600.5580277247,
                        estimated_diameter_max: 1342.8885744257,
                    },
                    miles: {
                        estimated_diameter_min: 0.3731693422,
                        estimated_diameter_max: 0.8344320164,
                    },
                    feet: {
                        estimated_diameter_min: 1970.3347996804,
                        estimated_diameter_max: 4405.8025505189,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 19:26',
                        epoch_date_close_approach: 1698866760000,
                        relative_velocity: {
                            kilometers_per_second: '4.7502698212',
                            kilometers_per_hour: '17100.9713564722',
                            miles_per_hour: '10625.8785631369',
                        },
                        miss_distance: {
                            astronomical: '0.3377906226',
                            lunar: '131.4005521914',
                            kilometers: '50532757.646933862',
                            miles: '31399599.5830248156',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3638502?api_key=DEMO_KEY',
                },
                id: '3638502',
                neo_reference_id: '3638502',
                name: '(2013 JE29)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3638502',
                absolute_magnitude_h: 23.59,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0508809225,
                        estimated_diameter_max: 0.1137732014,
                    },
                    meters: {
                        estimated_diameter_min: 50.8809224871,
                        estimated_diameter_max: 113.773201439,
                    },
                    miles: {
                        estimated_diameter_min: 0.0316159297,
                        estimated_diameter_max: 0.070695368,
                    },
                    feet: {
                        estimated_diameter_min: 166.9321657324,
                        estimated_diameter_max: 373.271670209,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 04:23',
                        epoch_date_close_approach: 1698812580000,
                        relative_velocity: {
                            kilometers_per_second: '21.0645913415',
                            kilometers_per_hour: '75832.5288295796',
                            miles_per_hour: '47119.384371913',
                        },
                        miss_distance: {
                            astronomical: '0.2666444877',
                            lunar: '103.7247057153',
                            kilometers: '39889447.407161199',
                            miles: '24786153.2696105862',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3650847?api_key=DEMO_KEY',
                },
                id: '3650847',
                neo_reference_id: '3650847',
                name: '(2013 TN127)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3650847',
                absolute_magnitude_h: 26.2,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0152951935,
                        estimated_diameter_max: 0.0342010925,
                    },
                    meters: {
                        estimated_diameter_min: 15.2951935344,
                        estimated_diameter_max: 34.201092472,
                    },
                    miles: {
                        estimated_diameter_min: 0.0095039897,
                        estimated_diameter_max: 0.021251567,
                    },
                    feet: {
                        estimated_diameter_min: 50.1810827555,
                        estimated_diameter_max: 112.2083122258,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 11:40',
                        epoch_date_close_approach: 1698838800000,
                        relative_velocity: {
                            kilometers_per_second: '11.391574575',
                            kilometers_per_hour: '41009.668470135',
                            miles_per_hour: '25481.8131669014',
                        },
                        miss_distance: {
                            astronomical: '0.3061764169',
                            lunar: '119.1026261741',
                            kilometers: '45803339.812472003',
                            miles: '28460875.6111315214',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3653193?api_key=DEMO_KEY',
                },
                id: '3653193',
                neo_reference_id: '3653193',
                name: '(2013 UV3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3653193',
                absolute_magnitude_h: 26.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0116025908,
                        estimated_diameter_max: 0.0259441818,
                    },
                    meters: {
                        estimated_diameter_min: 11.6025908209,
                        estimated_diameter_max: 25.9441817907,
                    },
                    miles: {
                        estimated_diameter_min: 0.0072095135,
                        estimated_diameter_max: 0.0161209622,
                    },
                    feet: {
                        estimated_diameter_min: 38.066244069,
                        estimated_diameter_max: 85.1187093863,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 11:12',
                        epoch_date_close_approach: 1698837120000,
                        relative_velocity: {
                            kilometers_per_second: '15.4310530085',
                            kilometers_per_hour: '55551.7908307152',
                            miles_per_hour: '34517.7224747852',
                        },
                        miss_distance: {
                            astronomical: '0.0375868943',
                            lunar: '14.6213018827',
                            kilometers: '5622919.327195141',
                            miles: '3493920.0546933058',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54167171?api_key=DEMO_KEY',
                },
                id: '54167171',
                neo_reference_id: '54167171',
                name: '(2021 NM3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54167171',
                absolute_magnitude_h: 26.61,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0126635356,
                        estimated_diameter_max: 0.0283165265,
                    },
                    meters: {
                        estimated_diameter_min: 12.6635356293,
                        estimated_diameter_max: 28.3165265026,
                    },
                    miles: {
                        estimated_diameter_min: 0.0078687538,
                        estimated_diameter_max: 0.0175950684,
                    },
                    feet: {
                        estimated_diameter_min: 41.547034234,
                        estimated_diameter_max: 92.9019928107,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 14:45',
                        epoch_date_close_approach: 1698849900000,
                        relative_velocity: {
                            kilometers_per_second: '8.7343117728',
                            kilometers_per_hour: '31443.5223819658',
                            miles_per_hour: '19537.7820045054',
                        },
                        miss_distance: {
                            astronomical: '0.2476758034',
                            lunar: '96.3458875226',
                            kilometers: '37051772.639178758',
                            miles: '23022903.9317445404',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54212927?api_key=DEMO_KEY',
                },
                id: '54212927',
                neo_reference_id: '54212927',
                name: '(2021 UM2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54212927',
                absolute_magnitude_h: 24.73,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0300992017,
                        estimated_diameter_max: 0.067303861,
                    },
                    meters: {
                        estimated_diameter_min: 30.0992016548,
                        estimated_diameter_max: 67.3038609686,
                    },
                    miles: {
                        estimated_diameter_min: 0.018702771,
                        estimated_diameter_max: 0.0418206674,
                    },
                    feet: {
                        estimated_diameter_min: 98.7506647571,
                        estimated_diameter_max: 220.8131992203,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 16:30',
                        epoch_date_close_approach: 1698856200000,
                        relative_velocity: {
                            kilometers_per_second: '16.305702229',
                            kilometers_per_hour: '58700.5280244072',
                            miles_per_hour: '36474.2253160546',
                        },
                        miss_distance: {
                            astronomical: '0.0731394459',
                            lunar: '28.4512444551',
                            kilometers: '10941505.319620233',
                            miles: '6798736.1440278954',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54327486?api_key=DEMO_KEY',
                },
                id: '54327486',
                neo_reference_id: '54327486',
                name: '(2022 VA3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54327486',
                absolute_magnitude_h: 22.39,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0884209093,
                        estimated_diameter_max: 0.1977151638,
                    },
                    meters: {
                        estimated_diameter_min: 88.4209092655,
                        estimated_diameter_max: 197.7151637501,
                    },
                    miles: {
                        estimated_diameter_min: 0.0549421888,
                        estimated_diameter_max: 0.122854469,
                    },
                    feet: {
                        estimated_diameter_min: 290.0948559548,
                        estimated_diameter_max: 648.6718178379,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-01',
                        close_approach_date_full: '2023-Nov-01 07:10',
                        epoch_date_close_approach: 1698822600000,
                        relative_velocity: {
                            kilometers_per_second: '9.5776405402',
                            kilometers_per_hour: '34479.505944694',
                            miles_per_hour: '21424.2241243572',
                        },
                        miss_distance: {
                            astronomical: '0.2336925424',
                            lunar: '90.9063989936',
                            kilometers: '34959906.577924688',
                            miles: '21723078.6349811744',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-11-04': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2365014?api_key=DEMO_KEY',
                },
                id: '2365014',
                neo_reference_id: '2365014',
                name: '365014 (2008 OX2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2365014',
                absolute_magnitude_h: 20.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.2538370294,
                        estimated_diameter_max: 0.5675968529,
                    },
                    meters: {
                        estimated_diameter_min: 253.8370293645,
                        estimated_diameter_max: 567.5968528656,
                    },
                    miles: {
                        estimated_diameter_min: 0.1577269688,
                        estimated_diameter_max: 0.3526882241,
                    },
                    feet: {
                        estimated_diameter_min: 832.7986794202,
                        estimated_diameter_max: 1862.1944587557,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 21:38',
                        epoch_date_close_approach: 1699133880000,
                        relative_velocity: {
                            kilometers_per_second: '14.392502243',
                            kilometers_per_hour: '51813.008074751',
                            miles_per_hour: '32194.5882673363',
                        },
                        miss_distance: {
                            astronomical: '0.4300869796',
                            lunar: '167.3038350644',
                            kilometers: '64340096.062893452',
                            miles: '39979081.8388235576',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2499998?api_key=DEMO_KEY',
                },
                id: '2499998',
                neo_reference_id: '2499998',
                name: '499998 (2011 PT)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2499998',
                absolute_magnitude_h: 24.02,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0417402433,
                        estimated_diameter_max: 0.0933340215,
                    },
                    meters: {
                        estimated_diameter_min: 41.7402433392,
                        estimated_diameter_max: 93.3340215038,
                    },
                    miles: {
                        estimated_diameter_min: 0.0259361767,
                        estimated_diameter_max: 0.0579950543,
                    },
                    feet: {
                        estimated_diameter_min: 136.9430599569,
                        estimated_diameter_max: 306.2139911105,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 22:04',
                        epoch_date_close_approach: 1699135440000,
                        relative_velocity: {
                            kilometers_per_second: '9.5963027778',
                            kilometers_per_hour: '34546.6900001736',
                            miles_per_hour: '21465.969683719',
                        },
                        miss_distance: {
                            astronomical: '0.2391155157',
                            lunar: '93.0159356073',
                            kilometers: '35771171.832671559',
                            miles: '22227175.4889991542',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3631822?api_key=DEMO_KEY',
                },
                id: '3631822',
                neo_reference_id: '3631822',
                name: '(2013 EY27)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3631822',
                absolute_magnitude_h: 21.05,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1638909515,
                        estimated_diameter_max: 0.3664713084,
                    },
                    meters: {
                        estimated_diameter_min: 163.8909514948,
                        estimated_diameter_max: 366.4713084395,
                    },
                    miles: {
                        estimated_diameter_min: 0.1018370844,
                        estimated_diameter_max: 0.2277146434,
                    },
                    feet: {
                        estimated_diameter_min: 537.6999893021,
                        estimated_diameter_max: 1202.3337275805,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 13:32',
                        epoch_date_close_approach: 1699104720000,
                        relative_velocity: {
                            kilometers_per_second: '9.9993747311',
                            kilometers_per_hour: '35997.7490319316',
                            miles_per_hour: '22367.60133598',
                        },
                        miss_distance: {
                            astronomical: '0.2374077182',
                            lunar: '92.3516023798',
                            kilometers: '35515688.964280234',
                            miles: '22068425.7959018692',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3736412?api_key=DEMO_KEY',
                },
                id: '3736412',
                neo_reference_id: '3736412',
                name: '(2015 XX169)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3736412',
                absolute_magnitude_h: 27.4,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0088014652,
                        estimated_diameter_max: 0.0196806745,
                    },
                    meters: {
                        estimated_diameter_min: 8.801465209,
                        estimated_diameter_max: 19.6806745089,
                    },
                    miles: {
                        estimated_diameter_min: 0.0054689752,
                        estimated_diameter_max: 0.0122290004,
                    },
                    feet: {
                        estimated_diameter_min: 28.8761991163,
                        estimated_diameter_max: 64.5691441559,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 21:26',
                        epoch_date_close_approach: 1699133160000,
                        relative_velocity: {
                            kilometers_per_second: '5.1248462432',
                            kilometers_per_hour: '18449.4464754303',
                            miles_per_hour: '11463.7685613583',
                        },
                        miss_distance: {
                            astronomical: '0.1889088326',
                            lunar: '73.4855358814',
                            kilometers: '28260358.981146562',
                            miles: '17560172.7948520756',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3764729?api_key=DEMO_KEY',
                },
                id: '3764729',
                neo_reference_id: '3764729',
                name: '(2016 WD7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3764729',
                absolute_magnitude_h: 27.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0092162655,
                        estimated_diameter_max: 0.0206081961,
                    },
                    meters: {
                        estimated_diameter_min: 9.216265485,
                        estimated_diameter_max: 20.6081961232,
                    },
                    miles: {
                        estimated_diameter_min: 0.0057267201,
                        estimated_diameter_max: 0.0128053354,
                    },
                    feet: {
                        estimated_diameter_min: 30.2370924539,
                        estimated_diameter_max: 67.6121941689,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 16:35',
                        epoch_date_close_approach: 1699115700000,
                        relative_velocity: {
                            kilometers_per_second: '7.9735854663',
                            kilometers_per_hour: '28704.9076787869',
                            miles_per_hour: '17836.1133296329',
                        },
                        miss_distance: {
                            astronomical: '0.1654624322',
                            lunar: '64.3648861258',
                            kilometers: '24752827.422139414',
                            miles: '15380693.7478713532',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3764825?api_key=DEMO_KEY',
                },
                id: '3764825',
                neo_reference_id: '3764825',
                name: '(2016 WC8)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3764825',
                absolute_magnitude_h: 24.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.040230458,
                        estimated_diameter_max: 0.0899580388,
                    },
                    meters: {
                        estimated_diameter_min: 40.2304579834,
                        estimated_diameter_max: 89.9580388169,
                    },
                    miles: {
                        estimated_diameter_min: 0.0249980399,
                        estimated_diameter_max: 0.0558973165,
                    },
                    feet: {
                        estimated_diameter_min: 131.9896957704,
                        estimated_diameter_max: 295.1379320721,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 03:50',
                        epoch_date_close_approach: 1699069800000,
                        relative_velocity: {
                            kilometers_per_second: '21.717515145',
                            kilometers_per_hour: '78183.054522032',
                            miles_per_hour: '48579.9096278704',
                        },
                        miss_distance: {
                            astronomical: '0.3692449221',
                            lunar: '143.6362746969',
                            kilometers: '55238253.854475927',
                            miles: '34323459.3452127126',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3826760?api_key=DEMO_KEY',
                },
                id: '3826760',
                neo_reference_id: '3826760',
                name: '(2018 PK20)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3826760',
                absolute_magnitude_h: 25.9,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0175612318,
                        estimated_diameter_max: 0.0392681082,
                    },
                    meters: {
                        estimated_diameter_min: 17.561231848,
                        estimated_diameter_max: 39.2681081809,
                    },
                    miles: {
                        estimated_diameter_min: 0.0109120402,
                        estimated_diameter_max: 0.0244000636,
                    },
                    feet: {
                        estimated_diameter_min: 57.6155918963,
                        estimated_diameter_max: 128.8323800441,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 06:21',
                        epoch_date_close_approach: 1699078860000,
                        relative_velocity: {
                            kilometers_per_second: '7.5018673081',
                            kilometers_per_hour: '27006.7223093381',
                            miles_per_hour: '16780.9269815995',
                        },
                        miss_distance: {
                            astronomical: '0.311960619',
                            lunar: '121.352680791',
                            kilometers: '46668644.12628153',
                            miles: '28998550.779403914',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3835502?api_key=DEMO_KEY',
                },
                id: '3835502',
                neo_reference_id: '3835502',
                name: '(2018 UY1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3835502',
                absolute_magnitude_h: 24.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.040230458,
                        estimated_diameter_max: 0.0899580388,
                    },
                    meters: {
                        estimated_diameter_min: 40.2304579834,
                        estimated_diameter_max: 89.9580388169,
                    },
                    miles: {
                        estimated_diameter_min: 0.0249980399,
                        estimated_diameter_max: 0.0558973165,
                    },
                    feet: {
                        estimated_diameter_min: 131.9896957704,
                        estimated_diameter_max: 295.1379320721,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 07:13',
                        epoch_date_close_approach: 1699081980000,
                        relative_velocity: {
                            kilometers_per_second: '12.5021102831',
                            kilometers_per_hour: '45007.5970190077',
                            miles_per_hour: '27965.9704921718',
                        },
                        miss_distance: {
                            astronomical: '0.1292188144',
                            lunar: '50.2661188016',
                            kilometers: '19330859.398165328',
                            miles: '12011639.0429164064',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3879296?api_key=DEMO_KEY',
                },
                id: '3879296',
                neo_reference_id: '3879296',
                name: '(2019 UO2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3879296',
                absolute_magnitude_h: 25.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0183888672,
                        estimated_diameter_max: 0.0411187571,
                    },
                    meters: {
                        estimated_diameter_min: 18.388867207,
                        estimated_diameter_max: 41.1187571041,
                    },
                    miles: {
                        estimated_diameter_min: 0.0114263088,
                        estimated_diameter_max: 0.0255500032,
                    },
                    feet: {
                        estimated_diameter_min: 60.3309310875,
                        estimated_diameter_max: 134.9040630575,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 00:22',
                        epoch_date_close_approach: 1699057320000,
                        relative_velocity: {
                            kilometers_per_second: '12.4597232944',
                            kilometers_per_hour: '44855.0038598782',
                            miles_per_hour: '27871.1550372671',
                        },
                        miss_distance: {
                            astronomical: '0.280150427',
                            lunar: '108.978516103',
                            kilometers: '41909907.15879049',
                            miles: '26041608.743029162',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3879730?api_key=DEMO_KEY',
                },
                id: '3879730',
                neo_reference_id: '3879730',
                name: '(2019 UC7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3879730',
                absolute_magnitude_h: 23.5,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0530340723,
                        estimated_diameter_max: 0.1185877909,
                    },
                    meters: {
                        estimated_diameter_min: 53.0340723319,
                        estimated_diameter_max: 118.5877908577,
                    },
                    miles: {
                        estimated_diameter_min: 0.0329538346,
                        estimated_diameter_max: 0.0736870142,
                    },
                    feet: {
                        estimated_diameter_min: 173.9963058693,
                        estimated_diameter_max: 389.0675677576,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 11:38',
                        epoch_date_close_approach: 1699097880000,
                        relative_velocity: {
                            kilometers_per_second: '14.354259431',
                            kilometers_per_hour: '51675.3339516212',
                            miles_per_hour: '32109.0429212171',
                        },
                        miss_distance: {
                            astronomical: '0.2766712175',
                            lunar: '107.6251036075',
                            kilometers: '41389424.828306725',
                            miles: '25718196.019713805',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3883085?api_key=DEMO_KEY',
                },
                id: '3883085',
                neo_reference_id: '3883085',
                name: '(2019 UH7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3883085',
                absolute_magnitude_h: 27.46,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0085616008,
                        estimated_diameter_max: 0.0191443215,
                    },
                    meters: {
                        estimated_diameter_min: 8.5616008472,
                        estimated_diameter_max: 19.1443214906,
                    },
                    miles: {
                        estimated_diameter_min: 0.0053199305,
                        estimated_diameter_max: 0.0118957262,
                    },
                    feet: {
                        estimated_diameter_min: 28.0892425236,
                        estimated_diameter_max: 62.8094557193,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 00:29',
                        epoch_date_close_approach: 1699057740000,
                        relative_velocity: {
                            kilometers_per_second: '5.9380758246',
                            kilometers_per_hour: '21377.0729684154',
                            miles_per_hour: '13282.8818119579',
                        },
                        miss_distance: {
                            astronomical: '0.0254556561',
                            lunar: '9.9022502229',
                            kilometers: '3808111.932012507',
                            miles: '2366251.0300343166',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54212945?api_key=DEMO_KEY',
                },
                id: '54212945',
                neo_reference_id: '54212945',
                name: '(2021 UE3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54212945',
                absolute_magnitude_h: 25.36,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0225193047,
                        estimated_diameter_max: 0.050354696,
                    },
                    meters: {
                        estimated_diameter_min: 22.5193046679,
                        estimated_diameter_max: 50.3546960434,
                    },
                    miles: {
                        estimated_diameter_min: 0.0139928429,
                        estimated_diameter_max: 0.0312889478,
                    },
                    feet: {
                        estimated_diameter_min: 73.8822355265,
                        estimated_diameter_max: 165.2057009669,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 21:03',
                        epoch_date_close_approach: 1699131780000,
                        relative_velocity: {
                            kilometers_per_second: '21.8846850129',
                            kilometers_per_hour: '78784.8660466175',
                            miles_per_hour: '48953.8519054663',
                        },
                        miss_distance: {
                            astronomical: '0.2771033065',
                            lunar: '107.7931862285',
                            kilometers: '41454064.422357155',
                            miles: '25758361.200972539',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54269715?api_key=DEMO_KEY',
                },
                id: '54269715',
                neo_reference_id: '54269715',
                name: '(2022 GE3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54269715',
                absolute_magnitude_h: 23.13,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0628861456,
                        estimated_diameter_max: 0.1406176963,
                    },
                    meters: {
                        estimated_diameter_min: 62.8861455592,
                        estimated_diameter_max: 140.6176963133,
                    },
                    miles: {
                        estimated_diameter_min: 0.0390756272,
                        estimated_diameter_max: 0.0873757586,
                    },
                    feet: {
                        estimated_diameter_min: 206.3193817964,
                        estimated_diameter_max: 461.3441627724,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 05:31',
                        epoch_date_close_approach: 1699075860000,
                        relative_velocity: {
                            kilometers_per_second: '8.6110695328',
                            kilometers_per_hour: '30999.8503181901',
                            miles_per_hour: '19262.1014379887',
                        },
                        miss_distance: {
                            astronomical: '0.2029742081',
                            lunar: '78.9569669509',
                            kilometers: '30364509.196696747',
                            miles: '18867631.1111472286',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54276382?api_key=DEMO_KEY',
                },
                id: '54276382',
                neo_reference_id: '54276382',
                name: '(2022 HN1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54276382',
                absolute_magnitude_h: 25.48,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0213086029,
                        estimated_diameter_max: 0.0476474846,
                    },
                    meters: {
                        estimated_diameter_min: 21.3086029248,
                        estimated_diameter_max: 47.6474846455,
                    },
                    miles: {
                        estimated_diameter_min: 0.0132405479,
                        estimated_diameter_max: 0.0296067652,
                    },
                    feet: {
                        estimated_diameter_min: 69.9101168199,
                        estimated_diameter_max: 156.3237735244,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 06:41',
                        epoch_date_close_approach: 1699080060000,
                        relative_velocity: {
                            kilometers_per_second: '15.4453801891',
                            kilometers_per_hour: '55603.368680737',
                            miles_per_hour: '34549.7709449835',
                        },
                        miss_distance: {
                            astronomical: '0.2590523403',
                            lunar: '100.7713603767',
                            kilometers: '38753678.327395161',
                            miles: '24080419.0887727818',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54288624?api_key=DEMO_KEY',
                },
                id: '54288624',
                neo_reference_id: '54288624',
                name: '(2022 MS1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54288624',
                absolute_magnitude_h: 21.07,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1623883902,
                        estimated_diameter_max: 0.3631114793,
                    },
                    meters: {
                        estimated_diameter_min: 162.3883902199,
                        estimated_diameter_max: 363.1114792885,
                    },
                    miles: {
                        estimated_diameter_min: 0.1009034364,
                        estimated_diameter_max: 0.225626943,
                    },
                    feet: {
                        estimated_diameter_min: 532.7703261691,
                        estimated_diameter_max: 1191.3106657088,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-04',
                        close_approach_date_full: '2023-Nov-04 02:33',
                        epoch_date_close_approach: 1699065180000,
                        relative_velocity: {
                            kilometers_per_second: '21.2907086811',
                            kilometers_per_hour: '76646.5512518462',
                            miles_per_hour: '47625.1862486819',
                        },
                        miss_distance: {
                            astronomical: '0.1266945684',
                            lunar: '49.2841871076',
                            kilometers: '18953237.573209308',
                            miles: '11776995.7214441304',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-11-03': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2141079?api_key=DEMO_KEY',
                },
                id: '2141079',
                neo_reference_id: '2141079',
                name: '141079 (2001 XS30)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2141079',
                absolute_magnitude_h: 17.76,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.745684261,
                        estimated_diameter_max: 1.6674006973,
                    },
                    meters: {
                        estimated_diameter_min: 745.6842609676,
                        estimated_diameter_max: 1667.4006972752,
                    },
                    miles: {
                        estimated_diameter_min: 0.4633465749,
                        estimated_diameter_max: 1.0360744387,
                    },
                    feet: {
                        estimated_diameter_min: 2446.4707507528,
                        estimated_diameter_max: 5470.4749036483,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 12:55',
                        epoch_date_close_approach: 1699016100000,
                        relative_velocity: {
                            kilometers_per_second: '33.3352680154',
                            kilometers_per_hour: '120006.9648553162',
                            miles_per_hour: '74567.6610235713',
                        },
                        miss_distance: {
                            astronomical: '0.3186999572',
                            lunar: '123.9742833508',
                            kilometers: '47676834.766211164',
                            miles: '29625011.3936915032',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2164121?api_key=DEMO_KEY',
                },
                id: '2164121',
                neo_reference_id: '2164121',
                name: '164121 (2003 YT1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2164121',
                absolute_magnitude_h: 16.33,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 1.4406383667,
                        estimated_diameter_max: 3.2213653189,
                    },
                    meters: {
                        estimated_diameter_min: 1440.6383666875,
                        estimated_diameter_max: 3221.3653189076,
                    },
                    miles: {
                        estimated_diameter_min: 0.8951709025,
                        estimated_diameter_max: 2.0016629896,
                    },
                    feet: {
                        estimated_diameter_min: 4726.5039789631,
                        estimated_diameter_max: 10568.7841928847,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 12:33',
                        epoch_date_close_approach: 1699014780000,
                        relative_velocity: {
                            kilometers_per_second: '23.251000116',
                            kilometers_per_hour: '83703.6004174927',
                            miles_per_hour: '52010.1621594137',
                        },
                        miss_distance: {
                            astronomical: '0.0593578678',
                            lunar: '23.0902105742',
                            kilometers: '8879810.590621586',
                            miles: '5517658.4437904468',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2495615?api_key=DEMO_KEY',
                },
                id: '2495615',
                neo_reference_id: '2495615',
                name: '495615 (2015 PQ291)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2495615',
                absolute_magnitude_h: 17.71,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.7630534787,
                        estimated_diameter_max: 1.7062394488,
                    },
                    meters: {
                        estimated_diameter_min: 763.0534787022,
                        estimated_diameter_max: 1706.2394488457,
                    },
                    miles: {
                        estimated_diameter_min: 0.4741393031,
                        estimated_diameter_max: 1.0602077126,
                    },
                    feet: {
                        estimated_diameter_min: 2503.4563750652,
                        estimated_diameter_max: 5597.898633351,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 04:20',
                        epoch_date_close_approach: 1698985200000,
                        relative_velocity: {
                            kilometers_per_second: '21.9916689147',
                            kilometers_per_hour: '79170.0080928257',
                            miles_per_hour: '49193.1641952338',
                        },
                        miss_distance: {
                            astronomical: '0.2639330408',
                            lunar: '102.6699528712',
                            kilometers: '39483820.726303096',
                            miles: '24534108.5375948848',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3160853?api_key=DEMO_KEY',
                },
                id: '3160853',
                neo_reference_id: '3160853',
                name: '(2003 TG2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3160853',
                absolute_magnitude_h: 21.32,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1447288051,
                        estimated_diameter_max: 0.3236234466,
                    },
                    meters: {
                        estimated_diameter_min: 144.7288051255,
                        estimated_diameter_max: 323.623446563,
                    },
                    miles: {
                        estimated_diameter_min: 0.0899302824,
                        estimated_diameter_max: 0.2010902246,
                    },
                    feet: {
                        estimated_diameter_min: 474.832053008,
                        estimated_diameter_max: 1061.7567484217,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 09:10',
                        epoch_date_close_approach: 1699002600000,
                        relative_velocity: {
                            kilometers_per_second: '14.9359708082',
                            kilometers_per_hour: '53769.4949095769',
                            miles_per_hour: '33410.2731008979',
                        },
                        miss_distance: {
                            astronomical: '0.2662615737',
                            lunar: '103.5757521693',
                            kilometers: '39832164.288368019',
                            miles: '24750559.1901119022',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3525129?api_key=DEMO_KEY',
                },
                id: '3525129',
                neo_reference_id: '3525129',
                name: '(2010 KV39)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3525129',
                absolute_magnitude_h: 26.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0116025908,
                        estimated_diameter_max: 0.0259441818,
                    },
                    meters: {
                        estimated_diameter_min: 11.6025908209,
                        estimated_diameter_max: 25.9441817907,
                    },
                    miles: {
                        estimated_diameter_min: 0.0072095135,
                        estimated_diameter_max: 0.0161209622,
                    },
                    feet: {
                        estimated_diameter_min: 38.066244069,
                        estimated_diameter_max: 85.1187093863,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 09:28',
                        epoch_date_close_approach: 1699003680000,
                        relative_velocity: {
                            kilometers_per_second: '10.5283242184',
                            kilometers_per_hour: '37901.9671860661',
                            miles_per_hour: '23550.8084440309',
                        },
                        miss_distance: {
                            astronomical: '0.2722362545',
                            lunar: '105.8999030005',
                            kilometers: '40725963.809977915',
                            miles: '25305940.459468627',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3653902?api_key=DEMO_KEY',
                },
                id: '3653902',
                neo_reference_id: '3653902',
                name: '(2013 WR43)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3653902',
                absolute_magnitude_h: 21.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1160259082,
                        estimated_diameter_max: 0.2594418179,
                    },
                    meters: {
                        estimated_diameter_min: 116.0259082094,
                        estimated_diameter_max: 259.4418179074,
                    },
                    miles: {
                        estimated_diameter_min: 0.0720951346,
                        estimated_diameter_max: 0.1612096218,
                    },
                    feet: {
                        estimated_diameter_min: 380.6624406898,
                        estimated_diameter_max: 851.1870938635,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 09:40',
                        epoch_date_close_approach: 1699004400000,
                        relative_velocity: {
                            kilometers_per_second: '20.5080580264',
                            kilometers_per_hour: '73829.0088952157',
                            miles_per_hour: '45874.4749993633',
                        },
                        miss_distance: {
                            astronomical: '0.3991185722',
                            lunar: '155.2571245858',
                            kilometers: '59707288.278561214',
                            miles: '37100388.5684201932',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3763426?api_key=DEMO_KEY',
                },
                id: '3763426',
                neo_reference_id: '3763426',
                name: '(2016 VW2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3763426',
                absolute_magnitude_h: 26.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0146067964,
                        estimated_diameter_max: 0.0326617897,
                    },
                    meters: {
                        estimated_diameter_min: 14.6067964271,
                        estimated_diameter_max: 32.6617897446,
                    },
                    miles: {
                        estimated_diameter_min: 0.0090762397,
                        estimated_diameter_max: 0.020295089,
                    },
                    feet: {
                        estimated_diameter_min: 47.92256199,
                        estimated_diameter_max: 107.1581062656,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 22:53',
                        epoch_date_close_approach: 1699051980000,
                        relative_velocity: {
                            kilometers_per_second: '8.1017528121',
                            kilometers_per_hour: '29166.3101234079',
                            miles_per_hour: '18122.810865292',
                        },
                        miss_distance: {
                            astronomical: '0.0258167485',
                            lunar: '10.0427151665',
                            kilometers: '3862130.585925695',
                            miles: '2399816.665116791',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3764802?api_key=DEMO_KEY',
                },
                id: '3764802',
                neo_reference_id: '3764802',
                name: '(2016 WS7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3764802',
                absolute_magnitude_h: 24.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0291443905,
                        estimated_diameter_max: 0.0651688382,
                    },
                    meters: {
                        estimated_diameter_min: 29.1443904535,
                        estimated_diameter_max: 65.1688382168,
                    },
                    miles: {
                        estimated_diameter_min: 0.018109479,
                        estimated_diameter_max: 0.0404940262,
                    },
                    feet: {
                        estimated_diameter_min: 95.6180819754,
                        estimated_diameter_max: 213.8085311752,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 04:08',
                        epoch_date_close_approach: 1698984480000,
                        relative_velocity: {
                            kilometers_per_second: '7.8595153381',
                            kilometers_per_hour: '28294.2552173081',
                            miles_per_hour: '17580.9498598879',
                        },
                        miss_distance: {
                            astronomical: '0.1513496339',
                            lunar: '58.8750075871',
                            kilometers: '22641582.856719793',
                            miles: '14068827.2069794234',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3798998?api_key=DEMO_KEY',
                },
                id: '3798998',
                neo_reference_id: '3798998',
                name: '(2018 CH)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3798998',
                absolute_magnitude_h: 26.4,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0139493823,
                        estimated_diameter_max: 0.0311917671,
                    },
                    meters: {
                        estimated_diameter_min: 13.9493822934,
                        estimated_diameter_max: 31.1917670523,
                    },
                    miles: {
                        estimated_diameter_min: 0.0086677416,
                        estimated_diameter_max: 0.0193816595,
                    },
                    feet: {
                        estimated_diameter_min: 45.7656914036,
                        estimated_diameter_max: 102.3351970157,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 23:27',
                        epoch_date_close_approach: 1699054020000,
                        relative_velocity: {
                            kilometers_per_second: '15.0875674836',
                            kilometers_per_hour: '54315.2429408304',
                            miles_per_hour: '33749.3797039843',
                        },
                        miss_distance: {
                            astronomical: '0.4454129891',
                            lunar: '173.2656527599',
                            kilometers: '66632834.439693217',
                            miles: '41403723.4046597146',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54091636?api_key=DEMO_KEY',
                },
                id: '54091636',
                neo_reference_id: '54091636',
                name: '(2020 WS1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54091636',
                absolute_magnitude_h: 27.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0101054342,
                        estimated_diameter_max: 0.0225964377,
                    },
                    meters: {
                        estimated_diameter_min: 10.1054341542,
                        estimated_diameter_max: 22.5964377109,
                    },
                    miles: {
                        estimated_diameter_min: 0.0062792237,
                        estimated_diameter_max: 0.0140407711,
                    },
                    feet: {
                        estimated_diameter_min: 33.1543125905,
                        estimated_diameter_max: 74.1352966996,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 20:52',
                        epoch_date_close_approach: 1699044720000,
                        relative_velocity: {
                            kilometers_per_second: '17.2038045469',
                            kilometers_per_hour: '61933.6963688566',
                            miles_per_hour: '38483.1903909709',
                        },
                        miss_distance: {
                            astronomical: '0.2086330294',
                            lunar: '81.1582484366',
                            kilometers: '31211056.809887378',
                            miles: '19393651.4060986964',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54278099?api_key=DEMO_KEY',
                },
                id: '54278099',
                neo_reference_id: '54278099',
                name: '(2022 JF)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54278099',
                absolute_magnitude_h: 24.77,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0295498293,
                        estimated_diameter_max: 0.0660754271,
                    },
                    meters: {
                        estimated_diameter_min: 29.5498293111,
                        estimated_diameter_max: 66.0754270632,
                    },
                    miles: {
                        estimated_diameter_min: 0.018361407,
                        estimated_diameter_max: 0.0410573542,
                    },
                    feet: {
                        estimated_diameter_min: 96.9482619972,
                        estimated_diameter_max: 216.7829041261,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 05:38',
                        epoch_date_close_approach: 1698989880000,
                        relative_velocity: {
                            kilometers_per_second: '17.1511616027',
                            kilometers_per_hour: '61744.1817698903',
                            miles_per_hour: '38365.4333891854',
                        },
                        miss_distance: {
                            astronomical: '0.0388197427',
                            lunar: '15.1008799103',
                            kilometers: '5807350.821868049',
                            miles: '3608520.4713911162',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54320195?api_key=DEMO_KEY',
                },
                id: '54320195',
                neo_reference_id: '54320195',
                name: '(2022 UK9)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54320195',
                absolute_magnitude_h: 27.16,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.009830033,
                        estimated_diameter_max: 0.0219806221,
                    },
                    meters: {
                        estimated_diameter_min: 9.8300330186,
                        estimated_diameter_max: 21.9806220506,
                    },
                    miles: {
                        estimated_diameter_min: 0.0061080974,
                        estimated_diameter_max: 0.0136581211,
                    },
                    feet: {
                        estimated_diameter_min: 32.2507655286,
                        estimated_diameter_max: 72.1149040484,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 13:00',
                        epoch_date_close_approach: 1699016400000,
                        relative_velocity: {
                            kilometers_per_second: '16.062720204',
                            kilometers_per_hour: '57825.7927344173',
                            miles_per_hour: '35930.6988243383',
                        },
                        miss_distance: {
                            astronomical: '0.4071622954',
                            lunar: '158.3861329106',
                            kilometers: '60910612.136150798',
                            miles: '37848099.3417170924',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54347924?api_key=DEMO_KEY',
                },
                id: '54347924',
                neo_reference_id: '54347924',
                name: '(2023 EJ1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54347924',
                absolute_magnitude_h: 28.77,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0046833323,
                        estimated_diameter_max: 0.0104722495,
                    },
                    meters: {
                        estimated_diameter_min: 4.6833323314,
                        estimated_diameter_max: 10.4722494541,
                    },
                    miles: {
                        estimated_diameter_min: 0.0029100869,
                        estimated_diameter_max: 0.0065071521,
                    },
                    feet: {
                        estimated_diameter_min: 15.365264046,
                        estimated_diameter_max: 34.3577748991,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-11-03',
                        close_approach_date_full: '2023-Nov-03 10:19',
                        epoch_date_close_approach: 1699006740000,
                        relative_velocity: {
                            kilometers_per_second: '7.4252521614',
                            kilometers_per_hour: '26730.9077809352',
                            miles_per_hour: '16609.5465597705',
                        },
                        miss_distance: {
                            astronomical: '0.2362978253',
                            lunar: '91.9198540417',
                            kilometers: '35349651.350512111',
                            miles: '21965254.8068086918',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-10-28': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3164401?api_key=DEMO_KEY',
                },
                id: '3164401',
                neo_reference_id: '3164401',
                name: '(2003 UY12)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3164401',
                absolute_magnitude_h: 22.9,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0699125232,
                        estimated_diameter_max: 0.1563291544,
                    },
                    meters: {
                        estimated_diameter_min: 69.9125232246,
                        estimated_diameter_max: 156.3291544087,
                    },
                    miles: {
                        estimated_diameter_min: 0.0434416145,
                        estimated_diameter_max: 0.097138403,
                    },
                    feet: {
                        estimated_diameter_min: 229.3718026961,
                        estimated_diameter_max: 512.8909429502,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 09:29',
                        epoch_date_close_approach: 1698485340000,
                        relative_velocity: {
                            kilometers_per_second: '13.6485947949',
                            kilometers_per_hour: '49134.9412616713',
                            miles_per_hour: '30530.5416967313',
                        },
                        miss_distance: {
                            astronomical: '0.1461934258',
                            lunar: '56.8692426362',
                            kilometers: '21870225.107683046',
                            miles: '13589527.7271401948',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3306658?api_key=DEMO_KEY',
                },
                id: '3306658',
                neo_reference_id: '3306658',
                name: '(2005 XY7)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3306658',
                absolute_magnitude_h: 18.01,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.6645917971,
                        estimated_diameter_max: 1.4860724357,
                    },
                    meters: {
                        estimated_diameter_min: 664.5917971389,
                        estimated_diameter_max: 1486.0724356914,
                    },
                    miles: {
                        estimated_diameter_min: 0.4129580696,
                        estimated_diameter_max: 0.9234023154,
                    },
                    feet: {
                        estimated_diameter_min: 2180.4193517252,
                        estimated_diameter_max: 4875.5658899136,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 08:56',
                        epoch_date_close_approach: 1698483360000,
                        relative_velocity: {
                            kilometers_per_second: '2.3219511955',
                            kilometers_per_hour: '8359.0243038593',
                            miles_per_hour: '5193.9726292508',
                        },
                        miss_distance: {
                            astronomical: '0.3920343042',
                            lunar: '152.5013443338',
                            kilometers: '58647496.875252054',
                            miles: '36441864.7265601852',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3459812?api_key=DEMO_KEY',
                },
                id: '3459812',
                neo_reference_id: '3459812',
                name: '(2009 JR2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3459812',
                absolute_magnitude_h: 22.93,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0689532874,
                        estimated_diameter_max: 0.154184238,
                    },
                    meters: {
                        estimated_diameter_min: 68.9532874451,
                        estimated_diameter_max: 154.1842379994,
                    },
                    miles: {
                        estimated_diameter_min: 0.0428455732,
                        estimated_diameter_max: 0.0958056141,
                    },
                    feet: {
                        estimated_diameter_min: 226.2247035814,
                        estimated_diameter_max: 505.8538153978,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 11:39',
                        epoch_date_close_approach: 1698493140000,
                        relative_velocity: {
                            kilometers_per_second: '10.8344014704',
                            kilometers_per_hour: '39003.8452935844',
                            miles_per_hour: '24235.4726492275',
                        },
                        miss_distance: {
                            astronomical: '0.234003535',
                            lunar: '91.027375115',
                            kilometers: '35006430.40847045',
                            miles: '21751987.20277421',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3720000?api_key=DEMO_KEY',
                },
                id: '3720000',
                neo_reference_id: '3720000',
                name: '(2015 KT120)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3720000',
                absolute_magnitude_h: 25.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0253837029,
                        estimated_diameter_max: 0.0567596853,
                    },
                    meters: {
                        estimated_diameter_min: 25.3837029364,
                        estimated_diameter_max: 56.7596852866,
                    },
                    miles: {
                        estimated_diameter_min: 0.0157726969,
                        estimated_diameter_max: 0.0352688224,
                    },
                    feet: {
                        estimated_diameter_min: 83.279867942,
                        estimated_diameter_max: 186.2194458756,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 01:09',
                        epoch_date_close_approach: 1698455340000,
                        relative_velocity: {
                            kilometers_per_second: '10.3310851923',
                            kilometers_per_hour: '37191.9066923394',
                            miles_per_hour: '23109.6044666928',
                        },
                        miss_distance: {
                            astronomical: '0.1986353376',
                            lunar: '77.2691463264',
                            kilometers: '29715423.411690912',
                            miles: '18464307.9066901056',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3781990?api_key=DEMO_KEY',
                },
                id: '3781990',
                neo_reference_id: '3781990',
                name: '(2017 SE20)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3781990',
                absolute_magnitude_h: 27.9,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0069912523,
                        estimated_diameter_max: 0.0156329154,
                    },
                    meters: {
                        estimated_diameter_min: 6.9912523225,
                        estimated_diameter_max: 15.6329154409,
                    },
                    miles: {
                        estimated_diameter_min: 0.0043441614,
                        estimated_diameter_max: 0.0097138403,
                    },
                    feet: {
                        estimated_diameter_min: 22.9371802696,
                        estimated_diameter_max: 51.289094295,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 20:17',
                        epoch_date_close_approach: 1698524220000,
                        relative_velocity: {
                            kilometers_per_second: '20.7849745207',
                            kilometers_per_hour: '74825.908274686',
                            miles_per_hour: '46493.909505457',
                        },
                        miss_distance: {
                            astronomical: '0.4063431427',
                            lunar: '158.0674825103',
                            kilometers: '60788068.637026049',
                            miles: '37771954.3422515162',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3825139?api_key=DEMO_KEY',
                },
                id: '3825139',
                neo_reference_id: '3825139',
                name: '(2018 LD3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3825139',
                absolute_magnitude_h: 23.59,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0508809225,
                        estimated_diameter_max: 0.1137732014,
                    },
                    meters: {
                        estimated_diameter_min: 50.8809224871,
                        estimated_diameter_max: 113.773201439,
                    },
                    miles: {
                        estimated_diameter_min: 0.0316159297,
                        estimated_diameter_max: 0.070695368,
                    },
                    feet: {
                        estimated_diameter_min: 166.9321657324,
                        estimated_diameter_max: 373.271670209,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 11:58',
                        epoch_date_close_approach: 1698494280000,
                        relative_velocity: {
                            kilometers_per_second: '10.7435025269',
                            kilometers_per_hour: '38676.6090969577',
                            miles_per_hour: '24032.1408024958',
                        },
                        miss_distance: {
                            astronomical: '0.4751576821',
                            lunar: '184.8363383369',
                            kilometers: '71082577.156297127',
                            miles: '44168665.3166972726',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3836163?api_key=DEMO_KEY',
                },
                id: '3836163',
                neo_reference_id: '3836163',
                name: '(2018 VO6)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3836163',
                absolute_magnitude_h: 24.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0366906138,
                        estimated_diameter_max: 0.0820427065,
                    },
                    meters: {
                        estimated_diameter_min: 36.6906137531,
                        estimated_diameter_max: 82.0427064882,
                    },
                    miles: {
                        estimated_diameter_min: 0.0227984834,
                        estimated_diameter_max: 0.0509789586,
                    },
                    feet: {
                        estimated_diameter_min: 120.3760332259,
                        estimated_diameter_max: 269.1689931548,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 13:33',
                        epoch_date_close_approach: 1698499980000,
                        relative_velocity: {
                            kilometers_per_second: '9.6589298875',
                            kilometers_per_hour: '34772.1475950685',
                            miles_per_hour: '21606.0602653913',
                        },
                        miss_distance: {
                            astronomical: '0.1477189959',
                            lunar: '57.4626894051',
                            kilometers: '22098447.145178733',
                            miles: '13731338.3253951954',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54016464?api_key=DEMO_KEY',
                },
                id: '54016464',
                neo_reference_id: '54016464',
                name: '(2020 GE1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016464',
                absolute_magnitude_h: 27.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0101054342,
                        estimated_diameter_max: 0.0225964377,
                    },
                    meters: {
                        estimated_diameter_min: 10.1054341542,
                        estimated_diameter_max: 22.5964377109,
                    },
                    miles: {
                        estimated_diameter_min: 0.0062792237,
                        estimated_diameter_max: 0.0140407711,
                    },
                    feet: {
                        estimated_diameter_min: 33.1543125905,
                        estimated_diameter_max: 74.1352966996,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 01:58',
                        epoch_date_close_approach: 1698458280000,
                        relative_velocity: {
                            kilometers_per_second: '4.2423566822',
                            kilometers_per_hour: '15272.4840560037',
                            miles_per_hour: '9489.7276624652',
                        },
                        miss_distance: {
                            astronomical: '0.0929382897',
                            lunar: '36.1529946933',
                            kilometers: '13903370.180562939',
                            miles: '8639153.6273249982',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54075990?api_key=DEMO_KEY',
                },
                id: '54075990',
                neo_reference_id: '54075990',
                name: '(2020 US3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54075990',
                absolute_magnitude_h: 26.1,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0160160338,
                        estimated_diameter_max: 0.0358129403,
                    },
                    meters: {
                        estimated_diameter_min: 16.0160337979,
                        estimated_diameter_max: 35.8129403019,
                    },
                    miles: {
                        estimated_diameter_min: 0.0099518989,
                        estimated_diameter_max: 0.0222531225,
                    },
                    feet: {
                        estimated_diameter_min: 52.5460443254,
                        estimated_diameter_max: 117.4965270602,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 20:38',
                        epoch_date_close_approach: 1698525480000,
                        relative_velocity: {
                            kilometers_per_second: '11.7085966329',
                            kilometers_per_hour: '42150.947878296',
                            miles_per_hour: '26190.9598080445',
                        },
                        miss_distance: {
                            astronomical: '0.1950302359',
                            lunar: '75.8667617651',
                            kilometers: '29176107.876237533',
                            miles: '18129192.7724546354',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54215203?api_key=DEMO_KEY',
                },
                id: '54215203',
                neo_reference_id: '54215203',
                name: '(2021 VF)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54215203',
                absolute_magnitude_h: 27.85,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0071540995,
                        estimated_diameter_max: 0.0159970528,
                    },
                    meters: {
                        estimated_diameter_min: 7.1540995088,
                        estimated_diameter_max: 15.9970528196,
                    },
                    miles: {
                        estimated_diameter_min: 0.00444535,
                        estimated_diameter_max: 0.0099401047,
                    },
                    feet: {
                        estimated_diameter_min: 23.4714558326,
                        estimated_diameter_max: 52.4837707725,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-28',
                        close_approach_date_full: '2023-Oct-28 23:03',
                        epoch_date_close_approach: 1698534180000,
                        relative_velocity: {
                            kilometers_per_second: '5.0794036529',
                            kilometers_per_hour: '18285.8531505233',
                            miles_per_hour: '11362.1180312238',
                        },
                        miss_distance: {
                            astronomical: '0.1397772204',
                            lunar: '54.3733387356',
                            kilometers: '20910374.446360548',
                            miles: '12993104.1827216424',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
        '2023-10-29': [
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/2065733?api_key=DEMO_KEY',
                },
                id: '2065733',
                neo_reference_id: '2065733',
                name: '65733 (1993 PC)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2065733',
                absolute_magnitude_h: 18.43,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.5477154309,
                        estimated_diameter_max: 1.2247289359,
                    },
                    meters: {
                        estimated_diameter_min: 547.7154309472,
                        estimated_diameter_max: 1224.7289359235,
                    },
                    miles: {
                        estimated_diameter_min: 0.340334485,
                        estimated_diameter_max: 0.7610110436,
                    },
                    feet: {
                        estimated_diameter_min: 1796.9666944687,
                        estimated_diameter_max: 4018.1396821351,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 10:04',
                        epoch_date_close_approach: 1698573840000,
                        relative_velocity: {
                            kilometers_per_second: '19.7116614372',
                            kilometers_per_hour: '70961.9811739171',
                            miles_per_hour: '44093.0154688709',
                        },
                        miss_distance: {
                            astronomical: '0.1913750034',
                            lunar: '74.4448763226',
                            kilometers: '28629292.879882758',
                            miles: '17789417.6892997404',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3174184?api_key=DEMO_KEY',
                },
                id: '3174184',
                neo_reference_id: '3174184',
                name: '(2004 BG41)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3174184',
                absolute_magnitude_h: 24.4,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0350392641,
                        estimated_diameter_max: 0.0783501764,
                    },
                    meters: {
                        estimated_diameter_min: 35.0392641108,
                        estimated_diameter_max: 78.3501764334,
                    },
                    miles: {
                        estimated_diameter_min: 0.0217723826,
                        estimated_diameter_max: 0.0486845275,
                    },
                    feet: {
                        estimated_diameter_min: 114.9582192654,
                        estimated_diameter_max: 257.0543928497,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 07:08',
                        epoch_date_close_approach: 1698563280000,
                        relative_velocity: {
                            kilometers_per_second: '21.0361320451',
                            kilometers_per_hour: '75730.0753624478',
                            miles_per_hour: '47055.7237717388',
                        },
                        miss_distance: {
                            astronomical: '0.407295957',
                            lunar: '158.438127273',
                            kilometers: '60930607.62681159',
                            miles: '37860523.963476342',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3449591?api_key=DEMO_KEY',
                },
                id: '3449591',
                neo_reference_id: '3449591',
                name: '(2009 EP2)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3449591',
                absolute_magnitude_h: 21.6,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1272198785,
                        estimated_diameter_max: 0.2844722965,
                    },
                    meters: {
                        estimated_diameter_min: 127.2198785394,
                        estimated_diameter_max: 284.4722965033,
                    },
                    miles: {
                        estimated_diameter_min: 0.0790507431,
                        estimated_diameter_max: 0.1767628354,
                    },
                    feet: {
                        estimated_diameter_min: 417.3880663071,
                        estimated_diameter_max: 933.3080892598,
                    },
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 22:37',
                        epoch_date_close_approach: 1698619020000,
                        relative_velocity: {
                            kilometers_per_second: '21.0872919843',
                            kilometers_per_hour: '75914.2511434022',
                            miles_per_hour: '47170.1634396324',
                        },
                        miss_distance: {
                            astronomical: '0.3467674565',
                            lunar: '134.8925405785',
                            kilometers: '51875672.877717655',
                            miles: '32234048.413527439',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3695411?api_key=DEMO_KEY',
                },
                id: '3695411',
                neo_reference_id: '3695411',
                name: '(2014 UD176)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3695411',
                absolute_magnitude_h: 24.8,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0291443905,
                        estimated_diameter_max: 0.0651688382,
                    },
                    meters: {
                        estimated_diameter_min: 29.1443904535,
                        estimated_diameter_max: 65.1688382168,
                    },
                    miles: {
                        estimated_diameter_min: 0.018109479,
                        estimated_diameter_max: 0.0404940262,
                    },
                    feet: {
                        estimated_diameter_min: 95.6180819754,
                        estimated_diameter_max: 213.8085311752,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 17:46',
                        epoch_date_close_approach: 1698601560000,
                        relative_velocity: {
                            kilometers_per_second: '18.4454418319',
                            kilometers_per_hour: '66403.5905949707',
                            miles_per_hour: '41260.6088338583',
                        },
                        miss_distance: {
                            astronomical: '0.1465635677',
                            lunar: '57.0132278353',
                            kilometers: '21925597.547520799',
                            miles: '13623934.5657890662',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3760440?api_key=DEMO_KEY',
                },
                id: '3760440',
                neo_reference_id: '3760440',
                name: '(2016 TL10)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3760440',
                absolute_magnitude_h: 27.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0092162655,
                        estimated_diameter_max: 0.0206081961,
                    },
                    meters: {
                        estimated_diameter_min: 9.216265485,
                        estimated_diameter_max: 20.6081961232,
                    },
                    miles: {
                        estimated_diameter_min: 0.0057267201,
                        estimated_diameter_max: 0.0128053354,
                    },
                    feet: {
                        estimated_diameter_min: 30.2370924539,
                        estimated_diameter_max: 67.6121941689,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 12:45',
                        epoch_date_close_approach: 1698583500000,
                        relative_velocity: {
                            kilometers_per_second: '4.7244483109',
                            kilometers_per_hour: '17008.0139191429',
                            miles_per_hour: '10568.1184265919',
                        },
                        miss_distance: {
                            astronomical: '0.0978133206',
                            lunar: '38.0493817134',
                            kilometers: '14632664.419387122',
                            miles: '9092316.0539094036',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3773597?api_key=DEMO_KEY',
                },
                id: '3773597',
                neo_reference_id: '3773597',
                name: '(2017 FQ127)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3773597',
                absolute_magnitude_h: 26.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0146067964,
                        estimated_diameter_max: 0.0326617897,
                    },
                    meters: {
                        estimated_diameter_min: 14.6067964271,
                        estimated_diameter_max: 32.6617897446,
                    },
                    miles: {
                        estimated_diameter_min: 0.0090762397,
                        estimated_diameter_max: 0.020295089,
                    },
                    feet: {
                        estimated_diameter_min: 47.92256199,
                        estimated_diameter_max: 107.1581062656,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 03:28',
                        epoch_date_close_approach: 1698550080000,
                        relative_velocity: {
                            kilometers_per_second: '9.5106092466',
                            kilometers_per_hour: '34238.1932877415',
                            miles_per_hour: '21274.2818237081',
                        },
                        miss_distance: {
                            astronomical: '0.4559552899',
                            lunar: '177.3666077711',
                            kilometers: '68209940.184272513',
                            miles: '42383691.4726181594',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3774560?api_key=DEMO_KEY',
                },
                id: '3774560',
                neo_reference_id: '3774560',
                name: '(2017 JQ1)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3774560',
                absolute_magnitude_h: 29.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0036690614,
                        estimated_diameter_max: 0.0082042706,
                    },
                    meters: {
                        estimated_diameter_min: 3.6690613753,
                        estimated_diameter_max: 8.2042706488,
                    },
                    miles: {
                        estimated_diameter_min: 0.0022798483,
                        estimated_diameter_max: 0.0050978959,
                    },
                    feet: {
                        estimated_diameter_min: 12.0376033226,
                        estimated_diameter_max: 26.9168993155,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 01:48',
                        epoch_date_close_approach: 1698544080000,
                        relative_velocity: {
                            kilometers_per_second: '8.8014045098',
                            kilometers_per_hour: '31685.0562351529',
                            miles_per_hour: '19687.8617478927',
                        },
                        miss_distance: {
                            astronomical: '0.0794786698',
                            lunar: '30.9172025522',
                            kilometers: '11889839.712513326',
                            miles: '7388003.8110668588',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3786457?api_key=DEMO_KEY',
                },
                id: '3786457',
                neo_reference_id: '3786457',
                name: '(2017 UD)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3786457',
                absolute_magnitude_h: 25.6,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0201629919,
                        estimated_diameter_max: 0.0450858206,
                    },
                    meters: {
                        estimated_diameter_min: 20.1629919443,
                        estimated_diameter_max: 45.0858206172,
                    },
                    miles: {
                        estimated_diameter_min: 0.0125286985,
                        estimated_diameter_max: 0.0280150214,
                    },
                    feet: {
                        estimated_diameter_min: 66.1515504905,
                        estimated_diameter_max: 147.9193637137,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 17:55',
                        epoch_date_close_approach: 1698602100000,
                        relative_velocity: {
                            kilometers_per_second: '25.2886586712',
                            kilometers_per_hour: '91039.1712162941',
                            miles_per_hour: '56568.2005815912',
                        },
                        miss_distance: {
                            astronomical: '0.3542270985',
                            lunar: '137.7943413165',
                            kilometers: '52991619.431880195',
                            miles: '32927465.448108891',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3788025?api_key=DEMO_KEY',
                },
                id: '3788025',
                neo_reference_id: '3788025',
                name: '(2017 UH5)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3788025',
                absolute_magnitude_h: 26.6,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0127219879,
                        estimated_diameter_max: 0.0284472297,
                    },
                    meters: {
                        estimated_diameter_min: 12.7219878539,
                        estimated_diameter_max: 28.4472296503,
                    },
                    miles: {
                        estimated_diameter_min: 0.0079050743,
                        estimated_diameter_max: 0.0176762835,
                    },
                    feet: {
                        estimated_diameter_min: 41.7388066307,
                        estimated_diameter_max: 93.330808926,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 00:53',
                        epoch_date_close_approach: 1698540780000,
                        relative_velocity: {
                            kilometers_per_second: '6.9674459543',
                            kilometers_per_hour: '25082.8054354911',
                            miles_per_hour: '15585.4798551806',
                        },
                        miss_distance: {
                            astronomical: '0.0665446798',
                            lunar: '25.8858804422',
                            kilometers: '9954942.357912026',
                            miles: '6185714.3458209188',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/3869320?api_key=DEMO_KEY',
                },
                id: '3869320',
                neo_reference_id: '3869320',
                name: '(2019 SE5)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3869320',
                absolute_magnitude_h: 26.66,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0123752784,
                        estimated_diameter_max: 0.0276719637,
                    },
                    meters: {
                        estimated_diameter_min: 12.3752783658,
                        estimated_diameter_max: 27.6719636665,
                    },
                    miles: {
                        estimated_diameter_min: 0.0076896391,
                        estimated_diameter_max: 0.0171945557,
                    },
                    feet: {
                        estimated_diameter_min: 40.6013082738,
                        estimated_diameter_max: 90.7872852756,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 14:11',
                        epoch_date_close_approach: 1698588660000,
                        relative_velocity: {
                            kilometers_per_second: '7.79926224',
                            kilometers_per_hour: '28077.344063844',
                            miles_per_hour: '17446.1697045591',
                        },
                        miss_distance: {
                            astronomical: '0.1069841241',
                            lunar: '41.6168242749',
                            kilometers: '16004597.089175667',
                            miles: '9944795.4849195246',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54016668?api_key=DEMO_KEY',
                },
                id: '54016668',
                neo_reference_id: '54016668',
                name: '(2020 HN3)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016668',
                absolute_magnitude_h: 29.4,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0035039264,
                        estimated_diameter_max: 0.0078350176,
                    },
                    meters: {
                        estimated_diameter_min: 3.5039264111,
                        estimated_diameter_max: 7.8350176433,
                    },
                    miles: {
                        estimated_diameter_min: 0.0021772383,
                        estimated_diameter_max: 0.0048684527,
                    },
                    feet: {
                        estimated_diameter_min: 11.4958219265,
                        estimated_diameter_max: 25.705439285,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 04:58',
                        epoch_date_close_approach: 1698555480000,
                        relative_velocity: {
                            kilometers_per_second: '6.7391320158',
                            kilometers_per_hour: '24260.8752568081',
                            miles_per_hour: '15074.7644060983',
                        },
                        miss_distance: {
                            astronomical: '0.0894887573',
                            lunar: '34.8111265897',
                            kilometers: '13387327.481026951',
                            miles: '8318499.5627598838',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54209314?api_key=DEMO_KEY',
                },
                id: '54209314',
                neo_reference_id: '54209314',
                name: '(2021 TB15)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54209314',
                absolute_magnitude_h: 23.32,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0576175751,
                        estimated_diameter_max: 0.1288368146,
                    },
                    meters: {
                        estimated_diameter_min: 57.6175751061,
                        estimated_diameter_max: 128.836814636,
                    },
                    miles: {
                        estimated_diameter_min: 0.0358018903,
                        estimated_diameter_max: 0.0800554603,
                    },
                    feet: {
                        estimated_diameter_min: 189.0340451111,
                        estimated_diameter_max: 422.6929749302,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 09:20',
                        epoch_date_close_approach: 1698571200000,
                        relative_velocity: {
                            kilometers_per_second: '16.8258074933',
                            kilometers_per_hour: '60572.9069758606',
                            miles_per_hour: '37637.6487817507',
                        },
                        miss_distance: {
                            astronomical: '0.2266959266',
                            lunar: '88.1847154474',
                            kilometers: '33913227.757036342',
                            miles: '21072702.5740198396',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54235435?api_key=DEMO_KEY',
                },
                id: '54235435',
                neo_reference_id: '54235435',
                name: '(2022 AO)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54235435',
                absolute_magnitude_h: 23.95,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0431077124,
                        estimated_diameter_max: 0.0963917753,
                    },
                    meters: {
                        estimated_diameter_min: 43.1077123878,
                        estimated_diameter_max: 96.3917752536,
                    },
                    miles: {
                        estimated_diameter_min: 0.0267858824,
                        estimated_diameter_max: 0.0598950538,
                    },
                    feet: {
                        estimated_diameter_min: 141.4295071104,
                        estimated_diameter_max: 316.2459919231,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 17:44',
                        epoch_date_close_approach: 1698601440000,
                        relative_velocity: {
                            kilometers_per_second: '5.8458505365',
                            kilometers_per_hour: '21045.061931327',
                            miles_per_hour: '13076.5830650515',
                        },
                        miss_distance: {
                            astronomical: '0.23708041',
                            lunar: '92.22427949',
                            kilometers: '35466724.3547267',
                            miles: '22038000.59836046',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
            {
                links: {
                    self: 'http://api.nasa.gov/neo/rest/v1/neo/54316681?api_key=DEMO_KEY',
                },
                id: '54316681',
                neo_reference_id: '54316681',
                name: '(2022 UD)',
                nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54316681',
                absolute_magnitude_h: 27.2,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0096506147,
                        estimated_diameter_max: 0.0215794305,
                    },
                    meters: {
                        estimated_diameter_min: 9.6506146958,
                        estimated_diameter_max: 21.5794304844,
                    },
                    miles: {
                        estimated_diameter_min: 0.0059966121,
                        estimated_diameter_max: 0.0134088323,
                    },
                    feet: {
                        estimated_diameter_min: 31.6621227185,
                        estimated_diameter_max: 70.7986587106,
                    },
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: '2023-10-29',
                        close_approach_date_full: '2023-Oct-29 23:40',
                        epoch_date_close_approach: 1698622800000,
                        relative_velocity: {
                            kilometers_per_second: '21.007020352',
                            kilometers_per_hour: '75625.2732672216',
                            miles_per_hour: '46990.6038254022',
                        },
                        miss_distance: {
                            astronomical: '0.3369500396',
                            lunar: '131.0735654044',
                            kilometers: '50407008.220575652',
                            miles: '31321462.5127499176',
                        },
                        orbiting_body: 'Earth',
                    },
                ],
                is_sentry_object: false,
            },
        ],
    },
};

export function getNearObjects() {
    console.log(1);

    return Promise.resolve({
        ...nearObjects,
        asteroids: convertAsteroidsToSorted(Object.values(nearObjects.near_earth_objects).flat()),
    });
}

// 0.0070801096 min
// 3.2213653189 max

const neo: IAsteroidDTO = {
    links: {
        self: 'http://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY',
    },
    id: '3542519',
    neo_reference_id: '3542519',
    name: '(2010 PK9)',
    designation: '2010 PK9',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3542519',
    absolute_magnitude_h: 21.87,
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: 0.1123453177,
            estimated_diameter_max: 0.2512117673,
        },
        meters: {
            estimated_diameter_min: 112.3453176718,
            estimated_diameter_max: 251.2117672679,
        },
        miles: {
            estimated_diameter_min: 0.0698081224,
            estimated_diameter_max: 0.156095707,
        },
        feet: {
            estimated_diameter_min: 368.5870120303,
            estimated_diameter_max: 824.1856145234,
        },
    },
    is_potentially_hazardous_asteroid: true,
    close_approach_data: [
        {
            close_approach_date: '1900-06-01',
            close_approach_date_full: '1900-Jun-01 16:40',
            epoch_date_close_approach: -2195882400000,
            relative_velocity: {
                kilometers_per_second: '30.9363888592',
                kilometers_per_hour: '111370.9998930743',
                miles_per_hour: '69201.6082391161',
            },
            miss_distance: {
                astronomical: '0.0445450684',
                lunar: '17.3280316076',
                kilometers: '6663847.351644308',
                miles: '4140722.7364471304',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1900-07-07',
            close_approach_date_full: '1900-Jul-07 22:08',
            epoch_date_close_approach: -2192752320000,
            relative_velocity: {
                kilometers_per_second: '31.7781911931',
                kilometers_per_hour: '114401.488295182',
                miles_per_hour: '71084.635879859',
            },
            miss_distance: {
                astronomical: '0.1416639489',
                lunar: '55.1072761221',
                kilometers: '21192625.011228843',
                miles: '13168486.5511423134',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1900-07-27',
            close_approach_date_full: '1900-Jul-27 20:47',
            epoch_date_close_approach: -2191029180000,
            relative_velocity: {
                kilometers_per_second: '23.8645472321',
                kilometers_per_hour: '85912.370035578',
                miles_per_hour: '53382.6057034957',
            },
            miss_distance: {
                astronomical: '0.2177286949',
                lunar: '84.6964623161',
                kilometers: '32571748.994919863',
                miles: '20239146.3237575894',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1902-02-11',
            close_approach_date_full: '1902-Feb-11 06:38',
            epoch_date_close_approach: -2142350520000,
            relative_velocity: {
                kilometers_per_second: '28.1654660865',
                kilometers_per_hour: '101395.677911243',
                miles_per_hour: '63003.3310887943',
            },
            miss_distance: {
                astronomical: '0.0869555951',
                lunar: '33.8257264939',
                kilometers: '13008371.811542437',
                miles: '8083027.4287301506',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1903-09-02',
            close_approach_date_full: '1903-Sep-02 16:25',
            epoch_date_close_approach: -2093240100000,
            relative_velocity: {
                kilometers_per_second: '20.7058985583',
                kilometers_per_hour: '74541.2348098782',
                miles_per_hour: '46317.0244850602',
            },
            miss_distance: {
                astronomical: '0.1920506678',
                lunar: '74.7077097742',
                kilometers: '28730370.834957586',
                miles: '17852224.6181872468',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1904-07-26',
            close_approach_date_full: '1904-Jul-26 08:05',
            epoch_date_close_approach: -2064930900000,
            relative_velocity: {
                kilometers_per_second: '15.8484691711',
                kilometers_per_hour: '57054.4890161339',
                miles_per_hour: '35451.4406889416',
            },
            miss_distance: {
                astronomical: '0.0426649325',
                lunar: '16.5966587425',
                kilometers: '6382583.025693775',
                miles: '3965953.188473095',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1907-04-13',
            close_approach_date_full: '1907-Apr-13 18:18',
            epoch_date_close_approach: -1979271720000,
            relative_velocity: {
                kilometers_per_second: '30.3954060483',
                kilometers_per_hour: '109423.461773723',
                miles_per_hour: '67991.4837893447',
            },
            miss_distance: {
                astronomical: '0.1169652426',
                lunar: '45.4994793714',
                kilometers: '17497751.156993262',
                miles: '10872598.3998685356',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1907-08-23',
            close_approach_date_full: '1907-Aug-23 15:07',
            epoch_date_close_approach: -1967878380000,
            relative_velocity: {
                kilometers_per_second: '30.7220738307',
                kilometers_per_hour: '110599.4657903587',
                miles_per_hour: '68722.2069517926',
            },
            miss_distance: {
                astronomical: '0.4441799855',
                lunar: '172.7860143595',
                kilometers: '66448379.727430885',
                miles: '41289108.561220813',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1908-08-17',
            close_approach_date_full: '1908-Aug-17 14:30',
            epoch_date_close_approach: -1936776600000,
            relative_velocity: {
                kilometers_per_second: '14.3282595348',
                kilometers_per_hour: '51581.7343252127',
                miles_per_hour: '32050.8837533523',
            },
            miss_distance: {
                astronomical: '0.1463952042',
                lunar: '56.9477344338',
                kilometers: '21900410.726535054',
                miles: '13608284.2009455852',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1909-07-31',
            close_approach_date_full: '1909-Jul-31 06:55',
            epoch_date_close_approach: -1906736700000,
            relative_velocity: {
                kilometers_per_second: '26.8654718104',
                kilometers_per_hour: '96715.6985175926',
                miles_per_hour: '60095.3738927786',
            },
            miss_distance: {
                astronomical: '0.3030560218',
                lunar: '117.8887924802',
                kilometers: '45336535.351953566',
                miles: '28170816.7695725708',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1912-09-02',
            close_approach_date_full: '1912-Sep-02 17:01',
            epoch_date_close_approach: -1809154740000,
            relative_velocity: {
                kilometers_per_second: '18.1655866163',
                kilometers_per_hour: '65396.1118186076',
                miles_per_hour: '40634.6007019565',
            },
            miss_distance: {
                astronomical: '0.1426721019',
                lunar: '55.4994476391',
                kilometers: '21343442.552662953',
                miles: '13262200.2258286314',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1913-07-24',
            close_approach_date_full: '1913-Jul-24 19:43',
            epoch_date_close_approach: -1781065020000,
            relative_velocity: {
                kilometers_per_second: '17.6677065393',
                kilometers_per_hour: '63603.7435415174',
                miles_per_hour: '39520.8927577834',
            },
            miss_distance: {
                astronomical: '0.0341653232',
                lunar: '13.2903107248',
                kilometers: '5111059.578581584',
                miles: '3175865.1553064992',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1914-01-17',
            close_approach_date_full: '1914-Jan-17 12:19',
            epoch_date_close_approach: -1765798860000,
            relative_velocity: {
                kilometers_per_second: '28.8047456747',
                kilometers_per_hour: '103697.0844290651',
                miles_per_hour: '64433.3355998266',
            },
            miss_distance: {
                astronomical: '0.0904500142',
                lunar: '35.1850555238',
                kilometers: '13531129.465789754',
                miles: '8407853.9726724452',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1915-09-12',
            close_approach_date_full: '1915-Sep-12 10:16',
            epoch_date_close_approach: -1713707040000,
            relative_velocity: {
                kilometers_per_second: '25.4078397826',
                kilometers_per_hour: '91468.2232173244',
                miles_per_hour: '56834.7968096758',
            },
            miss_distance: {
                astronomical: '0.0884656604',
                lunar: '34.4131418956',
                kilometers: '13234274.363983348',
                miles: '8223396.7658042824',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1916-08-26',
            close_approach_date_full: '1916-Aug-26 18:08',
            epoch_date_close_approach: -1683525120000,
            relative_velocity: {
                kilometers_per_second: '27.5361821354',
                kilometers_per_hour: '99130.2556875296',
                miles_per_hour: '61595.685818732',
            },
            miss_distance: {
                astronomical: '0.3610806108',
                lunar: '140.4603576012',
                kilometers: '54016890.273978996',
                miles: '33564539.2078863048',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1917-05-22',
            close_approach_date_full: '1917-May-22 04:10',
            epoch_date_close_approach: -1660333800000,
            relative_velocity: {
                kilometers_per_second: '29.9183533519',
                kilometers_per_hour: '107706.0720666719',
                miles_per_hour: '66924.3646127606',
            },
            miss_distance: {
                astronomical: '0.0650596911',
                lunar: '25.3082198379',
                kilometers: '9732791.211417957',
                miles: '6047676.0243115266',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1917-08-09',
            close_approach_date_full: '1917-Aug-09 13:03',
            epoch_date_close_approach: -1653476220000,
            relative_velocity: {
                kilometers_per_second: '14.3091252',
                kilometers_per_hour: '51512.8507199431',
                miles_per_hour: '32008.0821598447',
            },
            miss_distance: {
                astronomical: '0.1373525083',
                lunar: '53.4301257287',
                kilometers: '20547642.680837321',
                miles: '12767713.1151481898',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1918-08-04',
            close_approach_date_full: '1918-Aug-04 09:54',
            epoch_date_close_approach: -1622383560000,
            relative_velocity: {
                kilometers_per_second: '30.2104600556',
                kilometers_per_hour: '108757.6562001125',
                miles_per_hour: '67577.7780983421',
            },
            miss_distance: {
                astronomical: '0.3954042439',
                lunar: '153.8122508771',
                kilometers: '59151632.676400493',
                miles: '36755120.1875450834',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1919-01-29',
            close_approach_date_full: '1919-Jan-29 16:05',
            epoch_date_close_approach: -1606982100000,
            relative_velocity: {
                kilometers_per_second: '34.3383218951',
                kilometers_per_hour: '123617.9588223236',
                miles_per_hour: '76811.3922471266',
            },
            miss_distance: {
                astronomical: '0.0671048964',
                lunar: '26.1038046996',
                kilometers: '10038749.568010668',
                miles: '6237789.7314084984',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1920-10-08',
            close_approach_date_full: '1920-Oct-08 02:09',
            epoch_date_close_approach: -1553637060000,
            relative_velocity: {
                kilometers_per_second: '38.8097397003',
                kilometers_per_hour: '139715.0629212348',
                miles_per_hour: '86813.5067356973',
            },
            miss_distance: {
                astronomical: '0.0926231612',
                lunar: '36.0304097068',
                kilometers: '13856227.628186644',
                miles: '8609860.6036139272',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1920-10-23',
            close_approach_date_full: '1920-Oct-23 19:32',
            epoch_date_close_approach: -1552278480000,
            relative_velocity: {
                kilometers_per_second: '28.0906631202',
                kilometers_per_hour: '101126.3872328795',
                miles_per_hour: '62836.0043336745',
            },
            miss_distance: {
                astronomical: '0.0795483087',
                lunar: '30.9442920843',
                kilometers: '11900257.543622469',
                miles: '7394477.1511453122',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1921-08-31',
            close_approach_date_full: '1921-Aug-31 19:42',
            epoch_date_close_approach: -1525321080000,
            relative_velocity: {
                kilometers_per_second: '15.8302609724',
                kilometers_per_hour: '56988.9395006461',
                miles_per_hour: '35410.7107691654',
            },
            miss_distance: {
                astronomical: '0.1246254849',
                lunar: '48.4793136261',
                kilometers: '18643707.088757163',
                miles: '11584662.3970203294',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1922-07-25',
            close_approach_date_full: '1922-Jul-25 22:12',
            epoch_date_close_approach: -1496972880000,
            relative_velocity: {
                kilometers_per_second: '20.6687194233',
                kilometers_per_hour: '74407.3899239502',
                miles_per_hour: '46233.8584780234',
            },
            miss_distance: {
                astronomical: '0.1240060404',
                lunar: '48.2383497156',
                kilometers: '18551039.510973948',
                miles: '11527081.4342505624',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1925-03-20',
            close_approach_date_full: '1925-Mar-20 17:08',
            epoch_date_close_approach: -1413269520000,
            relative_velocity: {
                kilometers_per_second: '41.3047943403',
                kilometers_per_hour: '148697.2596251779',
                miles_per_hour: '92394.6944598779',
            },
            miss_distance: {
                astronomical: '0.0641642765',
                lunar: '24.9599035585',
                kilometers: '9598839.094491055',
                miles: '5964442.038464359',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1925-08-30',
            close_approach_date_full: '1925-Aug-30 22:22',
            epoch_date_close_approach: -1399167480000,
            relative_velocity: {
                kilometers_per_second: '23.7992698545',
                kilometers_per_hour: '85677.3714760974',
                miles_per_hour: '53236.5867374673',
            },
            miss_distance: {
                astronomical: '0.2660668704',
                lunar: '103.5000125856',
                kilometers: '39803037.089406048',
                miles: '24732460.3879295424',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1926-08-01',
            close_approach_date_full: '1926-Aug-01 00:38',
            epoch_date_close_approach: -1370215320000,
            relative_velocity: {
                kilometers_per_second: '14.7278278519',
                kilometers_per_hour: '53020.1802667597',
                miles_per_hour: '32944.6781218652',
            },
            miss_distance: {
                astronomical: '0.0980269732',
                lunar: '38.1324925748',
                kilometers: '14664626.393267084',
                miles: '9112176.3035463992',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1926-11-28',
            close_approach_date_full: '1926-Nov-28 19:41',
            epoch_date_close_approach: -1359865140000,
            relative_velocity: {
                kilometers_per_second: '32.2190511363',
                kilometers_per_hour: '115988.5840908146',
                miles_per_hour: '72070.7954868731',
            },
            miss_distance: {
                astronomical: '0.0394089133',
                lunar: '15.3300672737',
                kilometers: '5895489.488694671',
                miles: '3663287.2993856198',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1927-07-31',
            close_approach_date_full: '1927-Jul-31 06:22',
            epoch_date_close_approach: -1338745080000,
            relative_velocity: {
                kilometers_per_second: '27.625937881',
                kilometers_per_hour: '99453.3763716673',
                miles_per_hour: '61796.4604460507',
            },
            miss_distance: {
                astronomical: '0.0730755647',
                lunar: '28.4263946683',
                kilometers: '10931948.828167189',
                miles: '6792798.0155936482',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1927-08-09',
            close_approach_date_full: '1927-Aug-09 10:59',
            epoch_date_close_approach: -1337950860000,
            relative_velocity: {
                kilometers_per_second: '34.0521825722',
                kilometers_per_hour: '122587.8572600881',
                miles_per_hour: '76171.3271958586',
            },
            miss_distance: {
                astronomical: '0.4986377529',
                lunar: '193.9700858781',
                kilometers: '74595145.735426323',
                miles: '46351274.2228483374',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1928-08-09',
            close_approach_date_full: '1928-Aug-09 11:29',
            epoch_date_close_approach: -1306326660000,
            relative_velocity: {
                kilometers_per_second: '28.0106003179',
                kilometers_per_hour: '100838.1611442996',
                miles_per_hour: '62656.9118510233',
            },
            miss_distance: {
                astronomical: '0.0829204843',
                lunar: '32.2560683927',
                kilometers: '12404727.830648441',
                miles: '7707940.4520168458',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1930-08-25',
            close_approach_date_full: '1930-Aug-25 02:45',
            epoch_date_close_approach: -1241903700000,
            relative_velocity: {
                kilometers_per_second: '14.6076200995',
                kilometers_per_hour: '52587.4323581032',
                miles_per_hour: '32675.7854005114',
            },
            miss_distance: {
                astronomical: '0.1398408036',
                lunar: '54.3980726004',
                kilometers: '20919886.357648332',
                miles: '12999014.6103257016',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1931-07-29',
            close_approach_date_full: '1931-Jul-29 03:54',
            epoch_date_close_approach: -1212696360000,
            relative_velocity: {
                kilometers_per_second: '24.2414988207',
                kilometers_per_hour: '87269.39575452',
                miles_per_hour: '54225.8087120238',
            },
            miss_distance: {
                astronomical: '0.2286013446',
                lunar: '88.9259230494',
                kilometers: '34198274.231296002',
                miles: '21249822.2399767476',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1934-05-06',
            close_approach_date_full: '1934-May-06 18:45',
            epoch_date_close_approach: -1125206100000,
            relative_velocity: {
                kilometers_per_second: '27.2781537284',
                kilometers_per_hour: '98201.3534223628',
                miles_per_hour: '61018.5020751342',
            },
            miss_distance: {
                astronomical: '0.0687123607',
                lunar: '26.7291083123',
                kilometers: '10279222.803391709',
                miles: '6387212.8710312242',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1934-09-02',
            close_approach_date_full: '1934-Sep-02 23:18',
            epoch_date_close_approach: -1114908120000,
            relative_velocity: {
                kilometers_per_second: '20.1594099844',
                kilometers_per_hour: '72573.87594379',
                miles_per_hour: '45094.5841940733',
            },
            miss_distance: {
                astronomical: '0.1802141083',
                lunar: '70.1032881287',
                kilometers: '26959646.745629321',
                miles: '16751947.6895977898',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1935-07-26',
            close_approach_date_full: '1935-Jul-26 13:52',
            epoch_date_close_approach: -1086689280000,
            relative_velocity: {
                kilometers_per_second: '16.2259511913',
                kilometers_per_hour: '58413.4242888326',
                miles_per_hour: '36295.8302199138',
            },
            miss_distance: {
                astronomical: '0.0297585191',
                lunar: '11.5760639299',
                kilometers: '4451811.071714317',
                miles: '2766227.1283068946',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1938-08-24',
            close_approach_date_full: '1938-Aug-24 16:06',
            epoch_date_close_approach: -989481240000,
            relative_velocity: {
                kilometers_per_second: '29.8617139005',
                kilometers_per_hour: '107502.1700418216',
                miles_per_hour: '66797.6678240419',
            },
            miss_distance: {
                astronomical: '0.4214221779',
                lunar: '163.9332272031',
                kilometers: '63043860.184601073',
                miles: '39173638.2129698874',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1939-08-16',
            close_approach_date_full: '1939-Aug-16 02:36',
            epoch_date_close_approach: -958685040000,
            relative_velocity: {
                kilometers_per_second: '14.3109830776',
                kilometers_per_hour: '51519.5390792189',
                miles_per_hour: '32012.2380461958',
            },
            miss_distance: {
                astronomical: '0.1464444524',
                lunar: '56.9668919836',
                kilometers: '21907778.152356388',
                miles: '13612862.1070706344',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1940-07-02',
            close_approach_date_full: '1940-Jul-02 20:48',
            epoch_date_close_approach: -930885120000,
            relative_velocity: {
                kilometers_per_second: '24.6228015683',
                kilometers_per_hour: '88642.0856459041',
                miles_per_hour: '55078.7448281453',
            },
            miss_distance: {
                astronomical: '0.0938505795',
                lunar: '36.5078754255',
                kilometers: '14039846.791465665',
                miles: '8723956.260989577',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1940-08-01',
            close_approach_date_full: '1940-Aug-01 07:16',
            epoch_date_close_approach: -928341840000,
            relative_velocity: {
                kilometers_per_second: '27.8640391848',
                kilometers_per_hour: '100310.5410651389',
                miles_per_hour: '62329.0692523914',
            },
            miss_distance: {
                astronomical: '0.330643869',
                lunar: '128.620465041',
                kilometers: '49463618.53095903',
                miles: '30735267.341853414',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1941-02-10',
            close_approach_date_full: '1941-Feb-10 01:07',
            epoch_date_close_approach: -911688780000,
            relative_velocity: {
                kilometers_per_second: '26.4485545051',
                kilometers_per_hour: '95214.7962184046',
                miles_per_hour: '59162.7715724859',
            },
            miss_distance: {
                astronomical: '0.0607136107',
                lunar: '23.6175945623',
                kilometers: '9082626.840729209',
                miles: '5643682.6177887242',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1942-03-12',
            close_approach_date_full: '1942-Mar-12 15:28',
            epoch_date_close_approach: -877509120000,
            relative_velocity: {
                kilometers_per_second: '29.053946978',
                kilometers_per_hour: '104594.2091206394',
                miles_per_hour: '64990.7739949884',
            },
            miss_distance: {
                astronomical: '0.0678051531',
                lunar: '26.3762045559',
                kilometers: '10143506.478783897',
                miles: '6302882.6573638986',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1943-09-03',
            close_approach_date_full: '1943-Sep-03 09:06',
            epoch_date_close_approach: -830876040000,
            relative_velocity: {
                kilometers_per_second: '17.2807233511',
                kilometers_per_hour: '62210.6040639096',
                miles_per_hour: '38655.2500640443',
            },
            miss_distance: {
                astronomical: '0.1319181543',
                lunar: '51.3161620227',
                kilometers: '19734674.897611341',
                miles: '12262558.3589888658',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1943-11-20',
            close_approach_date_full: '1943-Nov-20 03:23',
            epoch_date_close_approach: -824157420000,
            relative_velocity: {
                kilometers_per_second: '33.3888568324',
                kilometers_per_hour: '120199.8845967379',
                miles_per_hour: '74687.5338484564',
            },
            miss_distance: {
                astronomical: '0.0639348127',
                lunar: '24.8706421403',
                kilometers: '9564511.798768949',
                miles: '5943112.0459875362',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1944-07-24',
            close_approach_date_full: '1944-Jul-24 16:51',
            epoch_date_close_approach: -802768140000,
            relative_velocity: {
                kilometers_per_second: '18.6254977526',
                kilometers_per_hour: '67051.791909329',
                miles_per_hour: '41663.3759227717',
            },
            miss_distance: {
                astronomical: '0.0617495528',
                lunar: '24.0205760392',
                kilometers: '9237601.572332536',
                miles: '5739979.4506635568',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1945-07-29',
            close_approach_date_full: '1945-Jul-29 14:42',
            epoch_date_close_approach: -770807880000,
            relative_velocity: {
                kilometers_per_second: '37.9636335601',
                kilometers_per_hour: '136669.0808164093',
                miles_per_hour: '84920.8519106183',
            },
            miss_distance: {
                astronomical: '0.0865849853',
                lunar: '33.6815592817',
                kilometers: '12952929.374861311',
                miles: '8048577.0960596518',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1947-08-29',
            close_approach_date_full: '1947-Aug-29 03:56',
            epoch_date_close_approach: -705096240000,
            relative_velocity: {
                kilometers_per_second: '26.1762659359',
                kilometers_per_hour: '94234.5573690733',
                miles_per_hour: '58553.6892719111',
            },
            miss_distance: {
                astronomical: '0.3266231635',
                lunar: '127.0564106015',
                kilometers: '48862129.552261745',
                miles: '30361519.421412281',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1947-11-17',
            close_approach_date_full: '1947-Nov-17 11:29',
            epoch_date_close_approach: -698157060000,
            relative_velocity: {
                kilometers_per_second: '25.8724994776',
                kilometers_per_hour: '93140.9981192419',
                miles_per_hour: '57874.1940813701',
            },
            miss_distance: {
                astronomical: '0.057583886',
                lunar: '22.400131654',
                kilometers: '8614426.69192282',
                miles: '5352756.535742116',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1948-08-06',
            close_approach_date_full: '1948-Aug-06 01:01',
            epoch_date_close_approach: -675471540000,
            relative_velocity: {
                kilometers_per_second: '14.4029684095',
                kilometers_per_hour: '51850.6862743231',
                miles_per_hour: '32218.0000352871',
            },
            miss_distance: {
                astronomical: '0.1269907965',
                lunar: '49.3994198385',
                kilometers: '18997552.666003455',
                miles: '11804531.843239479',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1949-08-06',
            close_approach_date_full: '1949-Aug-06 01:15',
            epoch_date_close_approach: -643934700000,
            relative_velocity: {
                kilometers_per_second: '31.6065321424',
                kilometers_per_hour: '113783.5157127095',
                miles_per_hour: '70700.6517493777',
            },
            miss_distance: {
                astronomical: '0.4332072569',
                lunar: '168.5176229341',
                kilometers: '64806882.900782803',
                miles: '40269129.7301885614',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1950-01-09',
            close_approach_date_full: '1950-Jan-09 05:27',
            epoch_date_close_approach: -630441180000,
            relative_velocity: {
                kilometers_per_second: '42.8381040947',
                kilometers_per_hour: '154217.1747409848',
                miles_per_hour: '95824.5550494747',
            },
            miss_distance: {
                astronomical: '0.0729549335',
                lunar: '28.3794691315',
                kilometers: '10913902.657591645',
                miles: '6781584.645168901',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1951-09-19',
            close_approach_date_full: '1951-Sep-19 06:17',
            epoch_date_close_approach: -577042980000,
            relative_velocity: {
                kilometers_per_second: '33.4283833761',
                kilometers_per_hour: '120342.1801539676',
                miles_per_hour: '74775.9507740028',
            },
            miss_distance: {
                astronomical: '0.036985427',
                lunar: '14.387331103',
                kilometers: '5532941.10024049',
                miles: '3438010.177039162',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1952-08-29',
            close_approach_date_full: '1952-Aug-29 14:03',
            epoch_date_close_approach: -547207020000,
            relative_velocity: {
                kilometers_per_second: '15.1856209579',
                kilometers_per_hour: '54668.2354484713',
                miles_per_hour: '33968.715520746',
            },
            miss_distance: {
                astronomical: '0.1293960368',
                lunar: '50.3350583152',
                kilometers: '19357371.491721616',
                miles: '12028112.8939496608',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1953-05-30',
            close_approach_date_full: '1953-May-30 15:18',
            epoch_date_close_approach: -523528920000,
            relative_velocity: {
                kilometers_per_second: '27.9568459233',
                kilometers_per_hour: '100644.6453237979',
                miles_per_hour: '62536.6686457788',
            },
            miss_distance: {
                astronomical: '0.0762827486',
                lunar: '29.6739892054',
                kilometers: '11411736.708305482',
                miles: '7090924.3800083716',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1953-07-26',
            close_approach_date_full: '1953-Jul-26 18:46',
            epoch_date_close_approach: -518591640000,
            relative_velocity: {
                kilometers_per_second: '21.9943927947',
                kilometers_per_hour: '79179.8140607494',
                miles_per_hour: '49199.2572423584',
            },
            miss_distance: {
                astronomical: '0.1634479178',
                lunar: '63.5812400242',
                kilometers: '24451460.358815086',
                miles: '15193432.9381207468',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1954-08-24',
            close_approach_date_full: '1954-Aug-24 00:16',
            epoch_date_close_approach: -484616640000,
            relative_velocity: {
                kilometers_per_second: '25.5165650069',
                kilometers_per_hour: '91859.6340247532',
                miles_per_hour: '57078.0042638807',
            },
            miss_distance: {
                astronomical: '0.0568520353',
                lunar: '22.1154417317',
                kilometers: '8504943.386044811',
                miles: '5284726.7640519518',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1956-09-01',
            close_approach_date_full: '1956-Sep-01 03:24',
            epoch_date_close_approach: -420755760000,
            relative_velocity: {
                kilometers_per_second: '22.3660402824',
                kilometers_per_hour: '80517.7450165835',
                miles_per_hour: '50030.5955076654',
            },
            miss_distance: {
                astronomical: '0.2307058887',
                lunar: '89.7445907043',
                kilometers: '34513109.545977069',
                miles: '21445451.8330547922',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1957-07-29',
            close_approach_date_full: '1957-Jul-29 03:29',
            epoch_date_close_approach: -392157060000,
            relative_velocity: {
                kilometers_per_second: '15.1637285942',
                kilometers_per_hour: '54589.4229390743',
                miles_per_hour: '33919.7444923376',
            },
            miss_distance: {
                astronomical: '0.073806968',
                lunar: '28.710910552',
                kilometers: '11041365.20395816',
                miles: '6860786.198856208',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1960-08-21',
            close_approach_date_full: '1960-Aug-21 12:01',
            epoch_date_close_approach: -295444740000,
            relative_velocity: {
                kilometers_per_second: '32.1585472234',
                kilometers_per_hour: '115770.7700041378',
                miles_per_hour: '71935.4542839599',
            },
            miss_distance: {
                astronomical: '0.4813448623',
                lunar: '187.2431514347',
                kilometers: '72008166.135523301',
                miles: '44743799.6390555138',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1961-05-30',
            close_approach_date_full: '1961-May-30 13:13',
            epoch_date_close_approach: -271075620000,
            relative_velocity: {
                kilometers_per_second: '25.134321119',
                kilometers_per_hour: '90483.5560283334',
                miles_per_hour: '56222.9629110497',
            },
            miss_distance: {
                astronomical: '0.0573280909',
                lunar: '22.3006273601',
                kilometers: '8576160.289806383',
                miles: '5328978.8960507654',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1961-08-21',
            close_approach_date_full: '1961-Aug-21 09:27',
            epoch_date_close_approach: -263917980000,
            relative_velocity: {
                kilometers_per_second: '14.4043916145',
                kilometers_per_hour: '51855.809812168',
                miles_per_hour: '32221.1836024551',
            },
            miss_distance: {
                astronomical: '0.1456425842',
                lunar: '56.6549652538',
                kilometers: '21787820.377615654',
                miles: '13538323.8022338652',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1962-07-30',
            close_approach_date_full: '1962-Jul-30 12:58',
            epoch_date_close_approach: -234270120000,
            relative_velocity: {
                kilometers_per_second: '25.7004596739',
                kilometers_per_hour: '92521.6548259176',
                miles_per_hour: '57489.3582444709',
            },
            miss_distance: {
                astronomical: '0.2695667602',
                lunar: '104.8614697178',
                kilometers: '40326613.148720774',
                miles: '25057795.4651997212',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1965-04-23',
            close_approach_date_full: '1965-Apr-23 18:22',
            epoch_date_close_approach: -148023480000,
            relative_velocity: {
                kilometers_per_second: '24.7711122423',
                kilometers_per_hour: '89176.0040722994',
                miles_per_hour: '55410.5009748129',
            },
            miss_distance: {
                astronomical: '0.0925837928',
                lunar: '36.0150953992',
                kilometers: '13850338.199401336',
                miles: '8606201.0822609968',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1965-09-03',
            close_approach_date_full: '1965-Sep-03 06:57',
            epoch_date_close_approach: -136573380000,
            relative_velocity: {
                kilometers_per_second: '18.9137838096',
                kilometers_per_hour: '68089.6217145049',
                miles_per_hour: '42308.24300366',
            },
            miss_distance: {
                astronomical: '0.1565257677',
                lunar: '60.8885236353',
                kilometers: '23415921.448034799',
                miles: '14549978.8963222662',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1966-07-25',
            close_approach_date_full: '1966-Jul-25 14:11',
            epoch_date_close_approach: -108467340000,
            relative_velocity: {
                kilometers_per_second: '17.0920907131',
                kilometers_per_hour: '61531.526567255',
                miles_per_hour: '38233.2977161924',
            },
            miss_distance: {
                astronomical: '0.018928175',
                lunar: '7.363060075',
                kilometers: '2831614.66298725',
                miles: '1759483.76323405',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1967-01-01',
            close_approach_date_full: '1967-Jan-01 16:07',
            epoch_date_close_approach: -94636380000,
            relative_velocity: {
                kilometers_per_second: '29.540190707',
                kilometers_per_hour: '106344.686545231',
                miles_per_hour: '66078.4525925075',
            },
            miss_distance: {
                astronomical: '0.0660228721',
                lunar: '25.6828972469',
                kilometers: '9876881.037442427',
                miles: '6137209.2904904126',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1968-03-06',
            close_approach_date_full: '1968-Mar-06 02:39',
            epoch_date_close_approach: -57532860000,
            relative_velocity: {
                kilometers_per_second: '24.7936732146',
                kilometers_per_hour: '89257.2235726295',
                miles_per_hour: '55460.9676137819',
            },
            miss_distance: {
                astronomical: '0.0589300879',
                lunar: '22.9238041931',
                kilometers: '8815815.628752773',
                miles: '5477893.8183953474',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1968-09-10',
            close_approach_date_full: '1968-Sep-10 10:21',
            epoch_date_close_approach: -41261940000,
            relative_velocity: {
                kilometers_per_second: '34.6189808378',
                kilometers_per_hour: '124628.331015904',
                miles_per_hour: '77439.1982359654',
            },
            miss_distance: {
                astronomical: '0.0680974023',
                lunar: '26.4898894947',
                kilometers: '10187226.336613101',
                miles: '6330048.9173027538',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1969-08-26',
            close_approach_date_full: '1969-Aug-26 14:37',
            epoch_date_close_approach: -11006580000,
            relative_velocity: {
                kilometers_per_second: '28.1479591681',
                kilometers_per_hour: '101332.6530050668',
                miles_per_hour: '62964.169863065',
            },
            miss_distance: {
                astronomical: '0.3781108377',
                lunar: '147.0851158653',
                kilometers: '56564575.943835699',
                miles: '35147597.6757386862',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1970-05-21',
            close_approach_date_full: '1970-May-21 00:03',
            epoch_date_close_approach: 12096180000,
            relative_velocity: {
                kilometers_per_second: '39.5402108134',
                kilometers_per_hour: '142344.7589282328',
                miles_per_hour: '88447.49756849',
            },
            miss_distance: {
                astronomical: '0.0980746469',
                lunar: '38.1510376441',
                kilometers: '14671758.277242103',
                miles: '9116607.8507549014',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1970-08-11',
            close_approach_date_full: '1970-Aug-11 11:32',
            epoch_date_close_approach: 19222320000,
            relative_velocity: {
                kilometers_per_second: '14.2920375689',
                kilometers_per_hour: '51451.3352481588',
                miles_per_hour: '31969.8588379462',
            },
            miss_distance: {
                astronomical: '0.1413539323',
                lunar: '54.9866796647',
                kilometers: '21146247.188204201',
                miles: '13139668.7082159338',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1971-08-04',
            close_approach_date_full: '1971-Aug-04 09:19',
            epoch_date_close_approach: 50145540000,
            relative_velocity: {
                kilometers_per_second: '29.7057647051',
                kilometers_per_hour: '106940.7529382693',
                miles_per_hour: '66448.8250687818',
            },
            miss_distance: {
                astronomical: '0.3816620125',
                lunar: '148.4665228625',
                kilometers: '57095824.129913375',
                miles: '35477699.991519575',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1974-09-01',
            close_approach_date_full: '1974-Sep-01 17:21',
            epoch_date_close_approach: 147288060000,
            relative_velocity: {
                kilometers_per_second: '15.9538638864',
                kilometers_per_hour: '57433.9099911642',
                miles_per_hour: '35687.1981275653',
            },
            miss_distance: {
                astronomical: '0.126004553',
                lunar: '49.015771117',
                kilometers: '18850012.73910211',
                miles: '11712854.783784718',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1974-11-01',
            close_approach_date_full: '1974-Nov-01 03:23',
            epoch_date_close_approach: 152508180000,
            relative_velocity: {
                kilometers_per_second: '37.9260772935',
                kilometers_per_hour: '136533.8782567469',
                miles_per_hour: '84836.8422979214',
            },
            miss_distance: {
                astronomical: '0.0465879464',
                lunar: '18.1227111496',
                kilometers: '6969457.549114168',
                miles: '4330620.1074967984',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1974-12-11',
            close_approach_date_full: '1974-Dec-11 20:29',
            epoch_date_close_approach: 156025740000,
            relative_velocity: {
                kilometers_per_second: '24.8719757752',
                kilometers_per_hour: '89539.1127907963',
                miles_per_hour: '55636.1226115923',
            },
            miss_distance: {
                astronomical: '0.0582879992',
                lunar: '22.6740316888',
                kilometers: '8719760.526881704',
                miles: '5418207.9457633552',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1975-07-26',
            close_approach_date_full: '1975-Jul-26 07:58',
            epoch_date_close_approach: 175593480000,
            relative_velocity: {
                kilometers_per_second: '20.4395435831',
                kilometers_per_hour: '73582.3568989804',
                miles_per_hour: '45721.2150409248',
            },
            miss_distance: {
                astronomical: '0.1173614037',
                lunar: '45.6535860393',
                kilometers: '17557016.013730119',
                miles: '10909423.8742248822',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1976-07-11',
            close_approach_date_full: '1976-Jul-11 20:13',
            epoch_date_close_approach: 205963980000,
            relative_velocity: {
                kilometers_per_second: '29.3323494199',
                kilometers_per_hour: '105596.4579116335',
                miles_per_hour: '65613.5324173703',
            },
            miss_distance: {
                astronomical: '0.0547078647',
                lunar: '21.2813593683',
                kilometers: '8184180.031368189',
                miles: '5085413.6577274482',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1978-08-31',
            close_approach_date_full: '1978-Aug-31 09:50',
            epoch_date_close_approach: 273405000000,
            relative_velocity: {
                kilometers_per_second: '23.9253765813',
                kilometers_per_hour: '86131.355692829',
                miles_per_hour: '53518.6748748026',
            },
            miss_distance: {
                astronomical: '0.2695817273',
                lunar: '104.8672919197',
                kilometers: '40328852.195000851',
                miles: '25059186.7440437038',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1979-08-01',
            close_approach_date_full: '1979-Aug-01 15:01',
            epoch_date_close_approach: 302367660000,
            relative_velocity: {
                kilometers_per_second: '14.7215235682',
                kilometers_per_hour: '52997.4848456474',
                miles_per_hour: '32930.5760697858',
            },
            miss_distance: {
                astronomical: '0.0991684286',
                lunar: '38.5765187254',
                kilometers: '14835385.689807082',
                miles: '9218281.2102664516',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1980-08-08',
            close_approach_date_full: '1980-Aug-08 23:43',
            epoch_date_close_approach: 334626180000,
            relative_velocity: {
                kilometers_per_second: '34.0644241767',
                kilometers_per_hour: '122631.9270360023',
                miles_per_hour: '76198.7104407871',
            },
            miss_distance: {
                astronomical: '0.4985858948',
                lunar: '193.9499130772',
                kilometers: '74587387.874124076',
                miles: '46346453.7113652088',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1981-09-17',
            close_approach_date_full: '1981-Sep-17 14:22',
            epoch_date_close_approach: 369584520000,
            relative_velocity: {
                kilometers_per_second: '24.9886147985',
                kilometers_per_hour: '89959.0132746475',
                miles_per_hour: '55897.0324427942',
            },
            miss_distance: {
                astronomical: '0.0576368419',
                lunar: '22.4207314991',
                kilometers: '8622348.781766753',
                miles: '5357679.0941090714',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1983-08-25',
            close_approach_date_full: '1983-Aug-25 10:04',
            epoch_date_close_approach: 430653840000,
            relative_velocity: {
                kilometers_per_second: '14.5663689057',
                kilometers_per_hour: '52438.9280605956',
                miles_per_hour: '32583.5106052073',
            },
            miss_distance: {
                astronomical: '0.1414385075',
                lunar: '55.0195794175',
                kilometers: '21158899.457979025',
                miles: '13147530.464099545',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1984-07-28',
            close_approach_date_full: '1984-Jul-28 19:34',
            epoch_date_close_approach: 459891240000,
            relative_velocity: {
                kilometers_per_second: '24.3861450197',
                kilometers_per_hour: '87790.1220710856',
                miles_per_hour: '54549.3677946698',
            },
            miss_distance: {
                astronomical: '0.2321236575',
                lunar: '90.2961027675',
                kilometers: '34725204.738609525',
                miles: '21577241.674580445',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1987-09-03',
            close_approach_date_full: '1987-Sep-03 14:29',
            epoch_date_close_approach: 557677740000,
            relative_velocity: {
                kilometers_per_second: '19.9365150225',
                kilometers_per_hour: '71771.4540810612',
                miles_per_hour: '44595.9904538683',
            },
            miss_distance: {
                astronomical: '0.1774120083',
                lunar: '69.0132712287',
                kilometers: '26540458.554102321',
                miles: '16491476.2256051898',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1988-06-06',
            close_approach_date_full: '1988-Jun-06 23:45',
            epoch_date_close_approach: 581643900000,
            relative_velocity: {
                kilometers_per_second: '25.1345379505',
                kilometers_per_hour: '90484.3366218468',
                miles_per_hour: '56223.4479415025',
            },
            miss_distance: {
                astronomical: '0.0899537567',
                lunar: '34.9920113563',
                kilometers: '13456890.400818229',
                miles: '8361723.9567764002',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1988-06-24',
            close_approach_date_full: '1988-Jun-24 07:25',
            epoch_date_close_approach: 583140300000,
            relative_velocity: {
                kilometers_per_second: '24.9965731356',
                kilometers_per_hour: '89987.663288111',
                miles_per_hour: '55914.8344469932',
            },
            miss_distance: {
                astronomical: '0.0574257639',
                lunar: '22.3386221571',
                kilometers: '8590771.962562893',
                miles: '5338058.1684902034',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1988-07-25',
            close_approach_date_full: '1988-Jul-25 21:10',
            epoch_date_close_approach: 585868200000,
            relative_velocity: {
                kilometers_per_second: '16.3625966801',
                kilometers_per_hour: '58905.3480484784',
                miles_per_hour: '36601.4925137893',
            },
            miss_distance: {
                astronomical: '0.0249764404',
                lunar: '9.7158353156',
                kilometers: '3736422.284021948',
                miles: '2321705.1483929624',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1990-02-14',
            close_approach_date_full: '1990-Feb-14 16:04',
            epoch_date_close_approach: 635011440000,
            relative_velocity: {
                kilometers_per_second: '29.4293668163',
                kilometers_per_hour: '105945.7205387624',
                miles_per_hour: '65830.5506314327',
            },
            miss_distance: {
                astronomical: '0.0663243537',
                lunar: '25.8001735893',
                kilometers: '9921982.042646619',
                miles: '6165233.7556125822',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1991-08-25',
            close_approach_date_full: '1991-Aug-25 11:17',
            epoch_date_close_approach: 683119020000,
            relative_velocity: {
                kilometers_per_second: '29.6044905974',
                kilometers_per_hour: '106576.1661507826',
                miles_per_hour: '66222.2850174126',
            },
            miss_distance: {
                astronomical: '0.4160151521',
                lunar: '161.8298941669',
                kilometers: '62234980.641886027',
                miles: '38671023.7716680926',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1991-10-25',
            close_approach_date_full: '1991-Oct-25 03:28',
            epoch_date_close_approach: 688361280000,
            relative_velocity: {
                kilometers_per_second: '33.7436304727',
                kilometers_per_hour: '121477.0697018474',
                miles_per_hour: '75481.1270044618',
            },
            miss_distance: {
                astronomical: '0.0648821487',
                lunar: '25.2391558443',
                kilometers: '9706231.246543269',
                miles: '6031172.4274203522',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1992-08-15',
            close_approach_date_full: '1992-Aug-15 00:22',
            epoch_date_close_approach: 713838120000,
            relative_velocity: {
                kilometers_per_second: '14.2838677069',
                kilometers_per_hour: '51421.9237447014',
                miles_per_hour: '31951.5836734785',
            },
            miss_distance: {
                astronomical: '0.14687515',
                lunar: '57.13443335',
                kilometers: '21972209.5959305',
                miles: '13652897.9496209',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1993-07-03',
            close_approach_date_full: '1993-Jul-03 12:07',
            epoch_date_close_approach: 741701220000,
            relative_velocity: {
                kilometers_per_second: '38.0351819559',
                kilometers_per_hour: '136926.6550413811',
                miles_per_hour: '85080.8985172404',
            },
            miss_distance: {
                astronomical: '0.0870632637',
                lunar: '33.8676095793',
                kilometers: '13024478.804768319',
                miles: '8093035.8502240422',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1993-08-02',
            close_approach_date_full: '1993-Aug-02 02:58',
            epoch_date_close_approach: 744260280000,
            relative_velocity: {
                kilometers_per_second: '28.0973236808',
                kilometers_per_hour: '101150.365250763',
                miles_per_hour: '62850.9033415088',
            },
            miss_distance: {
                astronomical: '0.3370929025',
                lunar: '131.1291390725',
                kilometers: '50428380.206117675',
                miles: '31334742.448766915',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1995-03-31',
            close_approach_date_full: '1995-Mar-31 16:06',
            epoch_date_close_approach: 796665960000,
            relative_velocity: {
                kilometers_per_second: '24.1345661356',
                kilometers_per_hour: '86884.4380882619',
                miles_per_hour: '53986.6109887869',
            },
            miss_distance: {
                astronomical: '0.0641788169',
                lunar: '24.9655597741',
                kilometers: '9601014.307360003',
                miles: '5965793.6530659214',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '1996-09-02',
            close_approach_date_full: '1996-Sep-02 19:20',
            epoch_date_close_approach: 841692000000,
            relative_velocity: {
                kilometers_per_second: '17.1327749474',
                kilometers_per_hour: '61677.9898105676',
                miles_per_hour: '38324.3042797941',
            },
            miss_distance: {
                astronomical: '0.1321741655',
                lunar: '51.4157503795',
                kilometers: '19772973.627827485',
                miles: '12286356.086429893',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1997-07-25',
            close_approach_date_full: '1997-Jul-25 06:04',
            epoch_date_close_approach: 869810640000,
            relative_velocity: {
                kilometers_per_second: '18.7564161545',
                kilometers_per_hour: '67523.0981562043',
                miles_per_hour: '41956.2272960037',
            },
            miss_distance: {
                astronomical: '0.0658905317',
                lunar: '25.6314168313',
                kilometers: '9857083.195487479',
                miles: '6124907.4819420502',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '1997-12-13',
            close_approach_date_full: '1997-Dec-13 16:07',
            epoch_date_close_approach: 882029220000,
            relative_velocity: {
                kilometers_per_second: '45.0721617012',
                kilometers_per_hour: '162259.7821244028',
                miles_per_hour: '100821.9185094657',
            },
            miss_distance: {
                astronomical: '0.0863619501',
                lunar: '33.5947985889',
                kilometers: '12919563.784006287',
                miles: '8027844.6792772806',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '1999-08-23',
            close_approach_date_full: '1999-Aug-23 12:15',
            epoch_date_close_approach: 935410500000,
            relative_velocity: {
                kilometers_per_second: '35.74448976',
                kilometers_per_hour: '128680.1631360043',
                miles_per_hour: '79956.8491441467',
            },
            miss_distance: {
                astronomical: '0.038816137',
                lunar: '15.099477293',
                kilometers: '5806811.41682819',
                miles: '3608185.300641422',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2000-08-28',
            close_approach_date_full: '2000-Aug-28 19:27',
            epoch_date_close_approach: 967490820000,
            relative_velocity: {
                kilometers_per_second: '26.0907488406',
                kilometers_per_hour: '93926.6958260754',
                miles_per_hour: '58362.3960814856',
            },
            miss_distance: {
                astronomical: '0.3248797233',
                lunar: '126.3782123637',
                kilometers: '48601314.611869371',
                miles: '30199456.5324084798',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2001-05-03',
            close_approach_date_full: '2001-May-03 05:18',
            epoch_date_close_approach: 988867080000,
            relative_velocity: {
                kilometers_per_second: '28.6554129804',
                kilometers_per_hour: '103159.4867294562',
                miles_per_hour: '64099.2932958668',
            },
            miss_distance: {
                astronomical: '0.0616532704',
                lunar: '23.9831221856',
                kilometers: '9223197.930374048',
                miles: '5731029.4425679424',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2001-08-06',
            close_approach_date_full: '2001-Aug-06 07:55',
            epoch_date_close_approach: 997084500000,
            relative_velocity: {
                kilometers_per_second: '14.3848827471',
                kilometers_per_hour: '51785.5778897184',
                miles_per_hour: '32177.5442170864',
            },
            miss_distance: {
                astronomical: '0.1265868201',
                lunar: '49.2422730189',
                kilometers: '18937118.657033187',
                miles: '11766979.8913725006',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2002-01-05',
            close_approach_date_full: '2002-Jan-05 03:17',
            epoch_date_close_approach: 1010200620000,
            relative_velocity: {
                kilometers_per_second: '23.4089501765',
                kilometers_per_hour: '84272.22063544',
                miles_per_hour: '52363.4806498377',
            },
            miss_distance: {
                astronomical: '0.0736150345',
                lunar: '28.6362484205',
                kilometers: '11012652.361176515',
                miles: '6842944.865665307',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2002-08-06',
            close_approach_date_full: '2002-Aug-06 15:09',
            epoch_date_close_approach: 1028646540000,
            relative_velocity: {
                kilometers_per_second: '31.6672071147',
                kilometers_per_hour: '114001.94561306',
                miles_per_hour: '70836.3755949594',
            },
            miss_distance: {
                astronomical: '0.4345789039',
                lunar: '169.0511936171',
                kilometers: '65012078.370374693',
                miles: '40396632.2826210434',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2005-08-30',
            close_approach_date_full: '2005-Aug-30 06:32',
            epoch_date_close_approach: 1125383520000,
            relative_velocity: {
                kilometers_per_second: '15.2437448346',
                kilometers_per_hour: '54877.4814045859',
                miles_per_hour: '34098.7328205328',
            },
            miss_distance: {
                astronomical: '0.1303453026',
                lunar: '50.7043227114',
                kilometers: '19499379.633465462',
                miles: '12116352.6614968956',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2006-07-27',
            close_approach_date_full: '2006-Jul-27 04:50',
            epoch_date_close_approach: 1153975800000,
            relative_velocity: {
                kilometers_per_second: '21.8838681292',
                kilometers_per_hour: '78781.9252650581',
                miles_per_hour: '48952.024618169',
            },
            miss_distance: {
                astronomical: '0.1594838105',
                lunar: '62.0392022845',
                kilometers: '23858438.350283635',
                miles: '14824946.148978763',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2008-10-11',
            close_approach_date_full: '2008-Oct-11 15:40',
            epoch_date_close_approach: 1223739600000,
            relative_velocity: {
                kilometers_per_second: '22.6803661464',
                kilometers_per_hour: '81649.3181269086',
                miles_per_hour: '50733.7110328005',
            },
            miss_distance: {
                astronomical: '0.0860556475',
                lunar: '33.4756468775',
                kilometers: '12873741.567470825',
                miles: '7999372.074214385',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2009-09-01',
            close_approach_date_full: '2009-Sep-01 09:51',
            epoch_date_close_approach: 1251798660000,
            relative_velocity: {
                kilometers_per_second: '22.6130436746',
                kilometers_per_hour: '81406.9572285283',
                miles_per_hour: '50583.1173956931',
            },
            miss_distance: {
                astronomical: '0.2382803331',
                lunar: '92.6910495759',
                kilometers: '35646230.294650497',
                miles: '22149540.4172589786',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2010-07-30',
            close_approach_date_full: '2010-Jul-30 05:23',
            epoch_date_close_approach: 1280467380000,
            relative_velocity: {
                kilometers_per_second: '15.0279637004',
                kilometers_per_hour: '54100.6693213327',
                miles_per_hour: '33616.0520013581',
            },
            miss_distance: {
                astronomical: '0.0796736508',
                lunar: '30.9930501612',
                kilometers: '11919008.454803796',
                miles: '7406128.4270765448',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2013-08-21',
            close_approach_date_full: '2013-Aug-21 07:22',
            epoch_date_close_approach: 1377069720000,
            relative_velocity: {
                kilometers_per_second: '32.6907044349',
                kilometers_per_hour: '117686.5359657865',
                miles_per_hour: '73125.8367505189',
            },
            miss_distance: {
                astronomical: '0.4961923551',
                lunar: '193.0188261339',
                kilometers: '74229319.433243637',
                miles: '46123960.2993587106',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2014-08-23',
            close_approach_date_full: '2014-Aug-23 08:41',
            epoch_date_close_approach: 1408783260000,
            relative_velocity: {
                kilometers_per_second: '14.4814171536',
                kilometers_per_hour: '52133.1017530842',
                miles_per_hour: '32393.482030965',
            },
            miss_distance: {
                astronomical: '0.1446196855',
                lunar: '56.2570576595',
                kilometers: '21634796.910869885',
                miles: '13443239.429119013',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2014-12-04',
            close_approach_date_full: '2014-Dec-04 13:36',
            epoch_date_close_approach: 1417700160000,
            relative_velocity: {
                kilometers_per_second: '25.0670269714',
                kilometers_per_hour: '90241.2970971566',
                miles_per_hour: '56072.4326323971',
            },
            miss_distance: {
                astronomical: '0.0904046612',
                lunar: '35.1674132068',
                kilometers: '13524344.753591644',
                miles: '8403638.1480029272',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2015-07-19',
            close_approach_date_full: '2015-Jul-19 05:52',
            epoch_date_close_approach: 1437285120000,
            relative_velocity: {
                kilometers_per_second: '21.7513642803',
                kilometers_per_hour: '78304.9114091149',
                miles_per_hour: '48655.6267586248',
            },
            miss_distance: {
                astronomical: '0.1053743888',
                lunar: '40.9906372432',
                kilometers: '15763784.117031856',
                miles: '9795161.2426613728',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2015-07-30',
            close_approach_date_full: '2015-Jul-30 10:21',
            epoch_date_close_approach: 1438251660000,
            relative_velocity: {
                kilometers_per_second: '25.0600242951',
                kilometers_per_hour: '90216.087462338',
                miles_per_hour: '56056.7683456955',
            },
            miss_distance: {
                astronomical: '0.251613116',
                lunar: '97.877502124',
                kilometers: '37640786.21766292',
                miles: '23388899.997951496',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2016-08-13',
            close_approach_date_full: '2016-Aug-13 04:21',
            epoch_date_close_approach: 1471062060000,
            relative_velocity: {
                kilometers_per_second: '29.1946954229',
                kilometers_per_hour: '105100.903522309',
                miles_per_hour: '65305.6141914036',
            },
            miss_distance: {
                astronomical: '0.0668617027',
                lunar: '26.0092023503',
                kilometers: '10002368.308493249',
                miles: '6215183.4650108762',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2018-04-22',
            close_approach_date_full: '2018-Apr-22 13:15',
            epoch_date_close_approach: 1524402900000,
            relative_velocity: {
                kilometers_per_second: '33.2218796854',
                kilometers_per_hour: '119598.7668672766',
                miles_per_hour: '74314.0226681697',
            },
            miss_distance: {
                astronomical: '0.0632976302',
                lunar: '24.6227781478',
                kilometers: '9469190.653967674',
                miles: '5883882.2331309412',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2018-09-03',
            close_approach_date_full: '2018-Sep-03 13:36',
            epoch_date_close_approach: 1535981760000,
            relative_velocity: {
                kilometers_per_second: '19.6774022918',
                kilometers_per_hour: '70838.6482505369',
                miles_per_hour: '44016.3811865628',
            },
            miss_distance: {
                astronomical: '0.1721372482',
                lunar: '66.9613895498',
                kilometers: '25751365.678381334',
                miles: '16001156.6490530492',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2019-07-26',
            close_approach_date_full: '2019-Jul-26 15:04',
            epoch_date_close_approach: 1564153440000,
            relative_velocity: {
                kilometers_per_second: '16.4909544694',
                kilometers_per_hour: '59367.4360898958',
                miles_per_hour: '36888.6160526355',
            },
            miss_distance: {
                astronomical: '0.0210717716',
                lunar: '8.1969191524',
                kilometers: '3152292.148486492',
                miles: '1958743.5129259096',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2019-12-30',
            close_approach_date_full: '2019-Dec-30 17:39',
            epoch_date_close_approach: 1577727540000,
            relative_velocity: {
                kilometers_per_second: '36.9899086815',
                kilometers_per_hour: '133163.6712535224',
                miles_per_hour: '82742.7267297234',
            },
            miss_distance: {
                astronomical: '0.080094872',
                lunar: '31.156905208',
                kilometers: '11982022.24912264',
                miles: '7445283.383226832',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2022-04-25',
            close_approach_date_full: '2022-Apr-25 02:39',
            epoch_date_close_approach: 1650854340000,
            relative_velocity: {
                kilometers_per_second: '20.591541962',
                kilometers_per_hour: '74129.5510630693',
                miles_per_hour: '46061.2202147166',
            },
            miss_distance: {
                astronomical: '0.1354750079',
                lunar: '52.6997780731',
                kilometers: '20266772.620073173',
                miles: '12593188.5522008674',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2022-08-25',
            close_approach_date_full: '2022-Aug-25 05:02',
            epoch_date_close_approach: 1661403720000,
            relative_velocity: {
                kilometers_per_second: '29.7283994651',
                kilometers_per_hour: '107022.2380743204',
                miles_per_hour: '66499.4567634576',
            },
            miss_distance: {
                astronomical: '0.4190751375',
                lunar: '163.0202284875',
                kilometers: '62692747.939957125',
                miles: '38955467.180873325',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2023-08-16',
            close_approach_date_full: '2023-Aug-16 11:36',
            epoch_date_close_approach: 1692185760000,
            relative_velocity: {
                kilometers_per_second: '14.3080484902',
                kilometers_per_hour: '51508.9745648514',
                miles_per_hour: '32005.67366781',
            },
            miss_distance: {
                astronomical: '0.147072815',
                lunar: '57.211325035',
                kilometers: '22001779.85890405',
                miles: '13671272.05901389',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2024-08-01',
            close_approach_date_full: '2024-Aug-01 14:16',
            epoch_date_close_approach: 1722521760000,
            relative_velocity: {
                kilometers_per_second: '27.7344090342',
                kilometers_per_hour: '99843.872523219',
                miles_per_hour: '62039.0995686635',
            },
            miss_distance: {
                astronomical: '0.3268192903',
                lunar: '127.1327039267',
                kilometers: '48891469.703791661',
                miles: '30379750.5461844818',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2026-02-17',
            close_approach_date_full: '2026-Feb-17 01:37',
            epoch_date_close_approach: 1771292220000,
            relative_velocity: {
                kilometers_per_second: '45.0013851023',
                kilometers_per_hour: '162004.9863684499',
                miles_per_hour: '100663.5983354405',
            },
            miss_distance: {
                astronomical: '0.0859103937',
                lunar: '33.4191431493',
                kilometers: '12852011.908381419',
                miles: '7985869.8901608222',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2027-09-03',
            close_approach_date_full: '2027-Sep-03 22:29',
            epoch_date_close_approach: 1820010540000,
            relative_velocity: {
                kilometers_per_second: '17.6478691703',
                kilometers_per_hour: '63532.3290129601',
                miles_per_hour: '39476.5185469696',
            },
            miss_distance: {
                astronomical: '0.1384016472',
                lunar: '53.8382407608',
                kilometers: '20704591.625611464',
                miles: '12865236.6672036432',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2027-10-27',
            close_approach_date_full: '2027-Oct-27 08:34',
            epoch_date_close_approach: 1824626040000,
            relative_velocity: {
                kilometers_per_second: '37.9112622216',
                kilometers_per_hour: '136480.5439976754',
                miles_per_hour: '84803.7024634445',
            },
            miss_distance: {
                astronomical: '0.0464756667',
                lunar: '18.0790343463',
                kilometers: '6952660.745149929',
                miles: '4320183.0574858602',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2028-07-25',
            close_approach_date_full: '2028-Jul-25 02:35',
            epoch_date_close_approach: 1848105300000,
            relative_velocity: {
                kilometers_per_second: '18.1453931216',
                kilometers_per_hour: '65323.415237792',
                miles_per_hour: '40589.4298737269',
            },
            miss_distance: {
                astronomical: '0.0460532662',
                lunar: '17.9147205518',
                kilometers: '6889470.530062994',
                miles: '4280918.4785535572',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2029-07-06',
            close_approach_date_full: '2029-Jul-06 02:17',
            epoch_date_close_approach: 1877998620000,
            relative_velocity: {
                kilometers_per_second: '31.2633051136',
                kilometers_per_hour: '112547.8984091062',
                miles_per_hour: '69932.8872087027',
            },
            miss_distance: {
                astronomical: '0.0428215779',
                lunar: '16.6575938031',
                kilometers: '6406016.843879073',
                miles: '3980514.2878862874',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2031-03-17',
            close_approach_date_full: '2031-Mar-17 00:49',
            epoch_date_close_approach: 1931474940000,
            relative_velocity: {
                kilometers_per_second: '27.9823047137',
                kilometers_per_hour: '100736.2969692804',
                miles_per_hour: '62593.6174140509',
            },
            miss_distance: {
                astronomical: '0.0796439964',
                lunar: '30.9815145996',
                kilometers: '11914572.219727668',
                miles: '7403371.8784230984',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2031-08-28',
            close_approach_date_full: '2031-Aug-28 10:32',
            epoch_date_close_approach: 1945679520000,
            relative_velocity: {
                kilometers_per_second: '27.1867994457',
                kilometers_per_hour: '97872.478004525',
                miles_per_hour: '60814.1516800895',
            },
            miss_distance: {
                astronomical: '0.3539191921',
                lunar: '137.6745657269',
                kilometers: '52945557.290280827',
                miles: '32898843.7605243326',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2032-08-09',
            close_approach_date_full: '2032-Aug-09 05:03',
            epoch_date_close_approach: 1975640580000,
            relative_velocity: {
                kilometers_per_second: '14.3317619056',
                kilometers_per_hour: '51594.3428603188',
                miles_per_hour: '32058.7182067353',
            },
            miss_distance: {
                astronomical: '0.1365572275',
                lunar: '53.1207614975',
                kilometers: '20428670.367105425',
                miles: '12693787.147387865',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2033-08-04',
            close_approach_date_full: '2033-Aug-04 23:21',
            epoch_date_close_approach: 2006810460000,
            relative_velocity: {
                kilometers_per_second: '30.3613973216',
                kilometers_per_hour: '109301.0303577748',
                miles_per_hour: '67915.4096686962',
            },
            miss_distance: {
                astronomical: '0.3990270851',
                lunar: '155.2215361039',
                kilometers: '59693602.003268737',
                miles: '37091884.3113010906',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2035-03-31',
            close_approach_date_full: '2035-Mar-31 08:59',
            epoch_date_close_approach: 2058944340000,
            relative_velocity: {
                kilometers_per_second: '31.8623839648',
                kilometers_per_hour: '114704.5822731828',
                miles_per_hour: '71272.9666908007',
            },
            miss_distance: {
                astronomical: '0.141864164',
                lunar: '55.185159796',
                kilometers: '21222576.76373068',
                miles: '13187097.707136184',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2036-09-01',
            close_approach_date_full: '2036-Sep-01 06:49',
            epoch_date_close_approach: 2103864540000,
            relative_velocity: {
                kilometers_per_second: '15.8741374333',
                kilometers_per_hour: '57146.8947599311',
                miles_per_hour: '35508.8580245805',
            },
            miss_distance: {
                astronomical: '0.1271724361',
                lunar: '49.4700776429',
                kilometers: '19024725.563271107',
                miles: '11821416.2986589966',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2037-07-26',
            close_approach_date_full: '2037-Jul-26 03:24',
            epoch_date_close_approach: 2132191440000,
            relative_velocity: {
                kilometers_per_second: '20.4506330587',
                kilometers_per_hour: '73622.2790113967',
                miles_per_hour: '45746.0210890537',
            },
            miss_distance: {
                astronomical: '0.1170882128',
                lunar: '45.5473147792',
                kilometers: '17516147.236986736',
                miles: '10884029.1939235168',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2040-08-30',
            close_approach_date_full: '2040-Aug-30 18:25',
            epoch_date_close_approach: 2229963900000,
            relative_velocity: {
                kilometers_per_second: '24.3489039691',
                kilometers_per_hour: '87656.0542888871',
                miles_per_hour: '54466.0632885588',
            },
            miss_distance: {
                astronomical: '0.2809131107',
                lunar: '109.2752000623',
                kilometers: '42024003.015794209',
                miles: '26112504.6210857242',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2041-08-02',
            close_approach_date_full: '2041-Aug-02 14:59',
            epoch_date_close_approach: 2259068340000,
            relative_velocity: {
                kilometers_per_second: '14.6157321778',
                kilometers_per_hour: '52616.6358402168',
                miles_per_hour: '32693.9313086058',
            },
            miss_distance: {
                astronomical: '0.1070526306',
                lunar: '41.6434733034',
                kilometers: '16014845.515656822',
                miles: '9951163.5618432636',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2042-01-04',
            close_approach_date_full: '2042-Jan-04 00:08',
            epoch_date_close_approach: 2272406880000,
            relative_velocity: {
                kilometers_per_second: '30.1492599317',
                kilometers_per_hour: '108537.3357539749',
                miles_per_hour: '67440.8795411296',
            },
            miss_distance: {
                astronomical: '0.1112657646',
                lunar: '43.2823824294',
                kilometers: '16645121.388081402',
                miles: '10342798.8285992676',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2042-08-08',
            close_approach_date_full: '2042-Aug-08 21:09',
            epoch_date_close_approach: 2291144940000,
            relative_velocity: {
                kilometers_per_second: '33.3039858591',
                kilometers_per_hour: '119894.3490928896',
                miles_per_hour: '74497.6859683013',
            },
            miss_distance: {
                astronomical: '0.4787005217',
                lunar: '186.2145029413',
                kilometers: '71612578.414208779',
                miles: '44497992.8272439902',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2045-08-27',
            close_approach_date_full: '2045-Aug-27 17:08',
            epoch_date_close_approach: 2387466480000,
            relative_velocity: {
                kilometers_per_second: '14.7934943951',
                kilometers_per_hour: '53256.5798225123',
                miles_per_hour: '33091.5676124938',
            },
            miss_distance: {
                astronomical: '0.1371396796',
                lunar: '53.3473353644',
                kilometers: '20515803.960642452',
                miles: '12747929.4517997576',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2046-06-24',
            close_approach_date_full: '2046-Jun-24 11:35',
            epoch_date_close_approach: 2413452900000,
            relative_velocity: {
                kilometers_per_second: '27.1289894551',
                kilometers_per_hour: '97664.3620384964',
                miles_per_hour: '60684.836512198',
            },
            miss_distance: {
                astronomical: '0.0767750141',
                lunar: '29.8654804849',
                kilometers: '11485378.578579967',
                miles: '7136683.3163268646',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2046-07-28',
            close_approach_date_full: '2046-Jul-28 11:52',
            epoch_date_close_approach: 2416391520000,
            relative_velocity: {
                kilometers_per_second: '23.1600740783',
                kilometers_per_hour: '83376.2666817698',
                miles_per_hour: '51806.7697056808',
            },
            miss_distance: {
                astronomical: '0.196889985',
                lunar: '76.590204165',
                kilometers: '29454322.38033195',
                miles: '18302067.24900291',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2048-03-02',
            close_approach_date_full: '2048-Mar-02 22:03',
            epoch_date_close_approach: 2466799380000,
            relative_velocity: {
                kilometers_per_second: '31.1272691373',
                kilometers_per_hour: '112058.1688941878',
                miles_per_hour: '69628.5883331691',
            },
            miss_distance: {
                astronomical: '0.0618477303',
                lunar: '24.0587670867',
                kilometers: '9252288.717214461',
                miles: '5749105.6193071218',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2048-10-09',
            close_approach_date_full: '2048-Oct-09 17:38',
            epoch_date_close_approach: 2485877880000,
            relative_velocity: {
                kilometers_per_second: '28.5207754363',
                kilometers_per_hour: '102674.79157055',
                miles_per_hour: '63798.1225733787',
            },
            miss_distance: {
                astronomical: '0.0841196417',
                lunar: '32.7225406213',
                kilometers: '12584119.223483179',
                miles: '7819409.0946547102',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2049-09-02',
            close_approach_date_full: '2049-Sep-02 11:47',
            epoch_date_close_approach: 2514196020000,
            relative_velocity: {
                kilometers_per_second: '21.4771130532',
                kilometers_per_hour: '77317.6069916046',
                miles_per_hour: '48042.1541887556',
            },
            miss_distance: {
                astronomical: '0.2117603349',
                lunar: '82.3747702761',
                kilometers: '31678895.051526663',
                miles: '19684352.6094594294',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2049-11-10',
            close_approach_date_full: '2049-Nov-10 05:33',
            epoch_date_close_approach: 2520135180000,
            relative_velocity: {
                kilometers_per_second: '35.1246064396',
                kilometers_per_hour: '126448.5831825578',
                miles_per_hour: '78570.2321447399',
            },
            miss_distance: {
                astronomical: '0.0696045696',
                lunar: '27.0761775744',
                kilometers: '10412695.354426752',
                miles: '6470148.8684510976',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2050-07-28',
            close_approach_date_full: '2050-Jul-28 14:11',
            epoch_date_close_approach: 2542630260000,
            relative_velocity: {
                kilometers_per_second: '15.4691578353',
                kilometers_per_hour: '55688.9682072582',
                miles_per_hour: '34602.9591618933',
            },
            miss_distance: {
                astronomical: '0.0585971824',
                lunar: '22.7943039536',
                kilometers: '8766013.675041488',
                miles: '5446948.3193210144',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2051-07-20',
            close_approach_date_full: '2051-Jul-20 08:50',
            epoch_date_close_approach: 2573455800000,
            relative_velocity: {
                kilometers_per_second: '38.8464798628',
                kilometers_per_hour: '139847.3275059889',
                miles_per_hour: '86895.6908050407',
            },
            miss_distance: {
                astronomical: '0.0923954315',
                lunar: '35.9418228535',
                kilometers: '13822159.750130905',
                miles: '8588691.805800289',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2053-08-22',
            close_approach_date_full: '2053-Aug-22 19:46',
            epoch_date_close_approach: 2639504760000,
            relative_velocity: {
                kilometers_per_second: '31.6425974168',
                kilometers_per_hour: '113913.3507003817',
                miles_per_hour: '70781.3261615789',
            },
            miss_distance: {
                astronomical: '0.4692611078',
                lunar: '182.5425709342',
                kilometers: '70200462.200720386',
                miles: '43620544.5000018868',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2054-08-21',
            close_approach_date_full: '2054-Aug-21 03:23',
            epoch_date_close_approach: 2670895380000,
            relative_velocity: {
                kilometers_per_second: '14.3683333424',
                kilometers_per_hour: '51726.0000327145',
                miles_per_hour: '32140.5248536609',
            },
            miss_distance: {
                astronomical: '0.1474041867',
                lunar: '57.3402286263',
                kilometers: '22051352.359402329',
                miles: '13702074.9824729802',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2055-07-16',
            close_approach_date_full: '2055-Jul-16 12:04',
            epoch_date_close_approach: 2699352240000,
            relative_velocity: {
                kilometers_per_second: '26.8011778841',
                kilometers_per_hour: '96484.2403829335',
                miles_per_hour: '59951.5548090511',
            },
            miss_distance: {
                astronomical: '0.0616359998',
                lunar: '23.9764039222',
                kilometers: '9220614.285400426',
                miles: '5729424.0400248388',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2055-07-31',
            close_approach_date_full: '2055-Jul-31 13:58',
            epoch_date_close_approach: 2700655080000,
            relative_velocity: {
                kilometers_per_second: '25.9819330389',
                kilometers_per_hour: '93534.9589401253',
                miles_per_hour: '58118.9860147684',
            },
            miss_distance: {
                astronomical: '0.2772138879',
                lunar: '107.8362023931',
                kilometers: '41470607.164258773',
                miles: '25768640.3841381474',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2055-12-30',
            close_approach_date_full: '2055-Dec-30 00:31',
            epoch_date_close_approach: 2713739460000,
            relative_velocity: {
                kilometers_per_second: '46.2013828592',
                kilometers_per_hour: '166324.9782931999',
                miles_per_hour: '103347.8733177941',
            },
            miss_distance: {
                astronomical: '0.0932711346',
                lunar: '36.2824713594',
                kilometers: '13953163.068643302',
                miles: '8670093.4932774876',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2057-09-07',
            close_approach_date_full: '2057-Sep-07 11:45',
            epoch_date_close_approach: 2767088700000,
            relative_velocity: {
                kilometers_per_second: '38.1654987297',
                kilometers_per_hour: '137395.7954270975',
                miles_per_hour: '85372.4041085762',
            },
            miss_distance: {
                astronomical: '0.0474422416',
                lunar: '18.4550319824',
                kilometers: '7097258.291385392',
                miles: '4410031.8063747296',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2058-09-03',
            close_approach_date_full: '2058-Sep-03 23:45',
            epoch_date_close_approach: 2798322300000,
            relative_velocity: {
                kilometers_per_second: '18.9175856559',
                kilometers_per_hour: '68103.3083611072',
                miles_per_hour: '42316.7473536002',
            },
            miss_distance: {
                astronomical: '0.1585638222',
                lunar: '61.6813268358',
                kilometers: '23720810.060178714',
                miles: '14739427.8950416932',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2059-05-18',
            close_approach_date_full: '2059-May-18 08:29',
            epoch_date_close_approach: 2820472140000,
            relative_velocity: {
                kilometers_per_second: '31.0493352216',
                kilometers_per_hour: '111777.6067977366',
                miles_per_hour: '69454.2579571825',
            },
            miss_distance: {
                astronomical: '0.0436340537',
                lunar: '16.9736468893',
                kilometers: '6527561.492985619',
                miles: '4056038.6307307822',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2059-07-26',
            close_approach_date_full: '2059-Jul-26 08:27',
            epoch_date_close_approach: 2826433620000,
            relative_velocity: {
                kilometers_per_second: '17.0165077854',
                kilometers_per_hour: '61259.428027301',
                miles_per_hour: '38064.2262650749',
            },
            miss_distance: {
                astronomical: '0.0159634256',
                lunar: '6.2097725584',
                kilometers: '2388094.467663472',
                miles: '1483893.0931690336',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2061-01-26',
            close_approach_date_full: '2061-Jan-26 23:41',
            epoch_date_close_approach: 2874008460000,
            relative_velocity: {
                kilometers_per_second: '28.1419740436',
                kilometers_per_hour: '101311.1065569665',
                miles_per_hour: '62950.7817381329',
            },
            miss_distance: {
                astronomical: '0.0868355049',
                lunar: '33.7790114061',
                kilometers: '12990406.573414563',
                miles: '8071864.3473964494',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2062-04-21',
            close_approach_date_full: '2062-Apr-21 14:26',
            epoch_date_close_approach: 2912855160000,
            relative_velocity: {
                kilometers_per_second: '25.5439657377',
                kilometers_per_hour: '91958.2766556041',
                miles_per_hour: '57139.2969585891',
            },
            miss_distance: {
                astronomical: '0.0553329125',
                lunar: '21.5245029625',
                kilometers: '8277685.850896375',
                miles: '5143515.479764975',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2062-08-26',
            close_approach_date_full: '2062-Aug-26 22:02',
            epoch_date_close_approach: 2923855320000,
            relative_velocity: {
                kilometers_per_second: '28.5138672964',
                kilometers_per_hour: '102649.922266883',
                miles_per_hour: '63782.6697552196',
            },
            miss_distance: {
                astronomical: '0.3881640976',
                lunar: '150.9958339664',
                kilometers: '58068522.211432112',
                miles: '36082106.5526706656',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2063-08-13',
            close_approach_date_full: '2063-Aug-13 06:27',
            epoch_date_close_approach: 2954212020000,
            relative_velocity: {
                kilometers_per_second: '14.2803910413',
                kilometers_per_hour: '51409.4077487837',
                miles_per_hour: '31943.8067203484',
            },
            miss_distance: {
                astronomical: '0.1441007107',
                lunar: '56.0551764623',
                kilometers: '21557159.386206209',
                miles: '13394997.7082913242',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2064-08-03',
            close_approach_date_full: '2064-Aug-03 12:34',
            epoch_date_close_approach: 2984992440000,
            relative_velocity: {
                kilometers_per_second: '29.1867186457',
                kilometers_per_hour: '105072.1871245027',
                miles_per_hour: '65287.7709385556',
            },
            miss_distance: {
                astronomical: '0.3671913694',
                lunar: '142.8374426966',
                kilometers: '54931046.744623178',
                miles: '34132569.6988207364',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2067-09-03',
            close_approach_date_full: '2067-Sep-03 04:17',
            epoch_date_close_approach: 3082249020000,
            relative_velocity: {
                kilometers_per_second: '16.3976020649',
                kilometers_per_hour: '59031.3674335817',
                miles_per_hour: '36679.7960589386',
            },
            miss_distance: {
                astronomical: '0.128964536',
                lunar: '50.167204504',
                kilometers: '19292819.89113832',
                miles: '11988002.389296016',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2068-07-25',
            close_approach_date_full: '2068-Jul-25 16:22',
            epoch_date_close_approach: 3110458920000,
            relative_velocity: {
                kilometers_per_second: '19.7435154216',
                kilometers_per_hour: '71076.6555176776',
                miles_per_hour: '44164.2696465258',
            },
            miss_distance: {
                astronomical: '0.0952642837',
                lunar: '37.0578063593',
                kilometers: '14251333.928595719',
                miles: '8855368.2743461622',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2069-01-25',
            close_approach_date_full: '2069-Jan-25 23:05',
            epoch_date_close_approach: 3126380700000,
            relative_velocity: {
                kilometers_per_second: '24.7638414887',
                kilometers_per_hour: '89149.8293594701',
                miles_per_hour: '55394.2370261663',
            },
            miss_distance: {
                astronomical: '0.0576070364',
                lunar: '22.4091371596',
                kilometers: '8617889.942452468',
                miles: '5354908.4998333384',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2071-08-31',
            close_approach_date_full: '2071-Aug-31 03:02',
            epoch_date_close_approach: 3208215720000,
            relative_velocity: {
                kilometers_per_second: '24.9297375719',
                kilometers_per_hour: '89747.0552588036',
                miles_per_hour: '55765.3299745605',
            },
            miss_distance: {
                astronomical: '0.2966904095',
                lunar: '115.4125692955',
                kilometers: '44384253.310627765',
                miles: '27579096.147542557',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2072-08-03',
            close_approach_date_full: '2072-Aug-03 17:18',
            epoch_date_close_approach: 3237470280000,
            relative_velocity: {
                kilometers_per_second: '14.5119171065',
                kilometers_per_hour: '52242.9015835192',
                miles_per_hour: '32461.7073756039',
            },
            miss_distance: {
                astronomical: '0.1143516843',
                lunar: '44.4828051927',
                kilometers: '17106768.402192441',
                miles: '10629652.9815640458',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2072-12-19',
            close_approach_date_full: '2072-Dec-19 17:55',
            epoch_date_close_approach: 3249395700000,
            relative_velocity: {
                kilometers_per_second: '24.2741243639',
                kilometers_per_hour: '87386.847709995',
                miles_per_hour: '54298.7887895799',
            },
            miss_distance: {
                astronomical: '0.0959296369',
                lunar: '37.3166287541',
                kilometers: '14350869.350113403',
                miles: '8917216.7173268414',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2073-08-08',
            close_approach_date_full: '2073-Aug-08 05:24',
            epoch_date_close_approach: 3269395440000,
            relative_velocity: {
                kilometers_per_second: '32.8610854109',
                kilometers_per_hour: '118299.9074793833',
                miles_per_hour: '73506.9619557312',
            },
            miss_distance: {
                astronomical: '0.4662800039',
                lunar: '181.3829215171',
                kilometers: '69754495.407031693',
                miles: '43343433.5842076434',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2074-08-29',
            close_approach_date_full: '2074-Aug-29 14:06',
            epoch_date_close_approach: 3302777160000,
            relative_velocity: {
                kilometers_per_second: '28.7903625134',
                kilometers_per_hour: '103645.3050480791',
                miles_per_hour: '64401.1619061245',
            },
            miss_distance: {
                astronomical: '0.0682967394',
                lunar: '26.5674316266',
                kilometers: '10217046.742185078',
                miles: '6348578.4580989564',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2075-11-02',
            close_approach_date_full: '2075-Nov-02 09:54',
            epoch_date_close_approach: 3339914040000,
            relative_velocity: {
                kilometers_per_second: '24.0971525694',
                kilometers_per_hour: '86749.7492499948',
                miles_per_hour: '53902.920582587',
            },
            miss_distance: {
                astronomical: '0.0635696989',
                lunar: '24.7286128721',
                kilometers: '9509891.551981343',
                miles: '5909172.5984268134',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2076-05-08',
            close_approach_date_full: '2076-May-08 02:41',
            epoch_date_close_approach: 3356131260000,
            relative_velocity: {
                kilometers_per_second: '33.1766512944',
                kilometers_per_hour: '119435.9446599307',
                miles_per_hour: '74212.8512804997',
            },
            miss_distance: {
                astronomical: '0.0630921507',
                lunar: '24.5428466223',
                kilometers: '9438451.358439009',
                miles: '5864781.7205919642',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2076-08-28',
            close_approach_date_full: '2076-Aug-28 03:23',
            epoch_date_close_approach: 3365810580000,
            relative_velocity: {
                kilometers_per_second: '14.8714878811',
                kilometers_per_hour: '53537.3563718531',
                miles_per_hour: '33266.0312411662',
            },
            miss_distance: {
                astronomical: '0.1369607863',
                lunar: '53.2777458707',
                kilometers: '20489041.904005181',
                miles: '12731300.2809102578',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2077-07-28',
            close_approach_date_full: '2077-Jul-28 06:12',
            epoch_date_close_approach: 3394678320000,
            relative_velocity: {
                kilometers_per_second: '22.9873955155',
                kilometers_per_hour: '82754.6238556988',
                miles_per_hour: '51420.5050285591',
            },
            miss_distance: {
                astronomical: '0.1914079743',
                lunar: '74.4577020027',
                kilometers: '28634225.256294741',
                miles: '17792482.5258837858',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2078-01-15',
            close_approach_date_full: '2078-Jan-15 10:46',
            epoch_date_close_approach: 3409469160000,
            relative_velocity: {
                kilometers_per_second: '37.3823273037',
                kilometers_per_hour: '134576.3782932811',
                miles_per_hour: '83620.5279456224',
            },
            miss_distance: {
                astronomical: '0.0825833281',
                lunar: '32.1249146309',
                kilometers: '12354289.981271147',
                miles: '7676599.8256979486',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2080-09-02',
            close_approach_date_full: '2080-Sep-02 09:44',
            epoch_date_close_approach: 3492495840000,
            relative_velocity: {
                kilometers_per_second: '21.5133907915',
                kilometers_per_hour: '77448.2068493698',
                miles_per_hour: '48123.3038614876',
            },
            miss_distance: {
                astronomical: '0.2134289959',
                lunar: '83.0238794051',
                kilometers: '31928523.182878733',
                miles: '19839464.3376551954',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2081-07-28',
            close_approach_date_full: '2081-Jul-28 11:23',
            epoch_date_close_approach: 3520927380000,
            relative_velocity: {
                kilometers_per_second: '15.468582314',
                kilometers_per_hour: '55686.8963303878',
                miles_per_hour: '34601.671778179',
            },
            miss_distance: {
                astronomical: '0.0582130028',
                lunar: '22.6448580892',
                kilometers: '8708541.225184036',
                miles: '5411236.5949542568',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2082-06-27',
            close_approach_date_full: '2082-Jun-27 15:28',
            epoch_date_close_approach: 3549799680000,
            relative_velocity: {
                kilometers_per_second: '46.2684712273',
                kilometers_per_hour: '166566.4964182152',
                miles_per_hour: '103497.9432883071',
            },
            miss_distance: {
                astronomical: '0.0936614185',
                lunar: '36.4342917965',
                kilometers: '14011548.708778595',
                miles: '8706372.647770811',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2082-08-08',
            close_approach_date_full: '2082-Aug-08 20:22',
            epoch_date_close_approach: 3553446120000,
            relative_velocity: {
                kilometers_per_second: '23.2645847006',
                kilometers_per_hour: '83752.5049223137',
                miles_per_hour: '52040.5495168677',
            },
            miss_distance: {
                astronomical: '0.0750959292',
                lunar: '29.2123164588',
                kilometers: '11234191.053990804',
                miles: '6980602.6261049352',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2084-03-06',
            close_approach_date_full: '2084-Mar-06 02:52',
            epoch_date_close_approach: 3603149520000,
            relative_velocity: {
                kilometers_per_second: '38.1863297789',
                kilometers_per_hour: '137470.7872041656',
                miles_per_hour: '85419.0010824995',
            },
            miss_distance: {
                astronomical: '0.047455638',
                lunar: '18.460243182',
                kilometers: '7099262.36429106',
                miles: '4411277.079534228',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2084-08-22',
            close_approach_date_full: '2084-Aug-22 20:40',
            epoch_date_close_approach: 3617815200000,
            relative_velocity: {
                kilometers_per_second: '31.5518933543',
                kilometers_per_hour: '113586.8160754296',
                miles_per_hour: '70578.4302442024',
            },
            miss_distance: {
                astronomical: '0.4670729939',
                lunar: '181.6913946271',
                kilometers: '69873125.021962993',
                miles: '43417146.6088075834',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2085-08-20',
            close_approach_date_full: '2085-Aug-20 17:22',
            epoch_date_close_approach: 3649166520000,
            relative_velocity: {
                kilometers_per_second: '14.380327815',
                kilometers_per_hour: '51769.1801340932',
                miles_per_hour: '32167.3552894314',
            },
            miss_distance: {
                astronomical: '0.1482686292',
                lunar: '57.6764967588',
                kilometers: '22180671.116139804',
                miles: '13782429.9318011352',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2085-11-14',
            close_approach_date_full: '2085-Nov-14 00:11',
            epoch_date_close_approach: 3656535060000,
            relative_velocity: {
                kilometers_per_second: '31.0099324521',
                kilometers_per_hour: '111635.7568276414',
                miles_per_hour: '69366.117902153',
            },
            miss_distance: {
                astronomical: '0.0438597937',
                lunar: '17.0614597493',
                kilometers: '6561331.716159419',
                miles: '4077022.4743772222',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2086-07-31',
            close_approach_date_full: '2086-Jul-31 15:41',
            epoch_date_close_approach: 3678968460000,
            relative_velocity: {
                kilometers_per_second: '26.1126583733',
                kilometers_per_hour: '94005.5701437385',
                miles_per_hour: '58411.4055151469',
            },
            miss_distance: {
                astronomical: '0.281341092',
                lunar: '109.441684788',
                kilometers: '42088028.10667404',
                miles: '26152287.967780152',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2087-07-26',
            close_approach_date_full: '2087-Jul-26 07:44',
            epoch_date_close_approach: 3710043840000,
            relative_velocity: {
                kilometers_per_second: '28.045440564',
                kilometers_per_hour: '100963.5860305307',
                miles_per_hour: '62734.8459976928',
            },
            miss_distance: {
                astronomical: '0.0843019926',
                lunar: '32.7934751214',
                kilometers: '12611398.529715762',
                miles: '7836359.6695390356',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2089-05-15',
            close_approach_date_full: '2089-May-15 07:30',
            epoch_date_close_approach: 3766980600000,
            relative_velocity: {
                kilometers_per_second: '22.0538718129',
                kilometers_per_hour: '79393.9385264998',
                miles_per_hour: '49332.3058583131',
            },
            miss_distance: {
                astronomical: '0.0981564881',
                lunar: '38.1828738709',
                kilometers: '14684001.546440347',
                miles: '9124215.4654649086',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2089-09-03',
            close_approach_date_full: '2089-Sep-03 22:14',
            epoch_date_close_approach: 3776624040000,
            relative_velocity: {
                kilometers_per_second: '18.762770425',
                kilometers_per_hour: '67545.9735298348',
                miles_per_hour: '41970.4411635798',
            },
            miss_distance: {
                astronomical: '0.1566856165',
                lunar: '60.9507048185',
                kilometers: '23439834.488036855',
                miles: '14564837.770364399',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2090-07-26',
            close_approach_date_full: '2090-Jul-26 04:11',
            epoch_date_close_approach: 3804725460000,
            relative_velocity: {
                kilometers_per_second: '17.1727035159',
                kilometers_per_hour: '61821.7326570758',
                miles_per_hour: '38413.6204946147',
            },
            miss_distance: {
                astronomical: '0.01752689',
                lunar: '6.81796021',
                kilometers: '2621985.4117243',
                miles: '1629226.18662334',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2093-08-27',
            close_approach_date_full: '2093-Aug-27 04:53',
            epoch_date_close_approach: 3902187180000,
            relative_velocity: {
                kilometers_per_second: '28.2130012884',
                kilometers_per_hour: '101566.8046381532',
                miles_per_hour: '63109.6625819681',
            },
            miss_distance: {
                astronomical: '0.3811794428',
                lunar: '148.2788032492',
                kilometers: '57023632.730666836',
                miles: '35432842.3361048968',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2094-08-12',
            close_approach_date_full: '2094-Aug-12 07:11',
            epoch_date_close_approach: 3932435460000,
            relative_velocity: {
                kilometers_per_second: '14.2986523719',
                kilometers_per_hour: '51475.1485389743',
                miles_per_hour: '31984.6554907865',
            },
            miss_distance: {
                astronomical: '0.1428311117',
                lunar: '55.5613024513',
                kilometers: '21367230.080052079',
                miles: '13276981.1099495302',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2095-08-04',
            close_approach_date_full: '2095-Aug-04 21:09',
            epoch_date_close_approach: 3963330540000,
            relative_velocity: {
                kilometers_per_second: '29.5845158149',
                kilometers_per_hour: '106504.256933496',
                miles_per_hour: '66177.6034262603',
            },
            miss_distance: {
                astronomical: '0.3776826088',
                lunar: '146.9185348232',
                kilometers: '56500513.812523256',
                miles: '35107791.3131866928',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2096-02-19',
            close_approach_date_full: '2096-Feb-19 23:36',
            epoch_date_close_approach: 3980532960000,
            relative_velocity: {
                kilometers_per_second: '21.5315570675',
                kilometers_per_hour: '77513.6054430292',
                miles_per_hour: '48163.9400043089',
            },
            miss_distance: {
                astronomical: '0.1100587494',
                lunar: '42.8128535166',
                kilometers: '16464554.485103778',
                miles: '10230599.7578290164',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2098-09-02',
            close_approach_date_full: '2098-Sep-02 17:14',
            epoch_date_close_approach: 4060516440000,
            relative_velocity: {
                kilometers_per_second: '16.146463803',
                kilometers_per_hour: '58127.2696906988',
                miles_per_hour: '36118.0248808678',
            },
            miss_distance: {
                astronomical: '0.1292845107',
                lunar: '50.2916746623',
                kilometers: '19340687.424712209',
                miles: '12017745.8954341242',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2099-06-18',
            close_approach_date_full: '2099-Jun-18 04:37',
            epoch_date_close_approach: 4085440620000,
            relative_velocity: {
                kilometers_per_second: '23.9525111408',
                kilometers_per_hour: '86229.0401067691',
                miles_per_hour: '53579.3721707866',
            },
            miss_distance: {
                astronomical: '0.0982332849',
                lunar: '38.2127478261',
                kilometers: '14695490.184143163',
                miles: '9131354.1739071294',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2099-07-26',
            close_approach_date_full: '2099-Jul-26 18:38',
            epoch_date_close_approach: 4088774280000,
            relative_velocity: {
                kilometers_per_second: '20.1080182399',
                kilometers_per_hour: '72388.8656637923',
                miles_per_hour: '44979.6260009269',
            },
            miss_distance: {
                astronomical: '0.1060917992',
                lunar: '41.2697098888',
                kilometers: '15871107.184787704',
                miles: '9861848.7046261552',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2101-02-26',
            close_approach_date_full: '2101-Feb-26 04:13',
            epoch_date_close_approach: 4138834380000,
            relative_velocity: {
                kilometers_per_second: '28.7461992834',
                kilometers_per_hour: '103486.3174202926',
                miles_per_hour: '64302.3731770701',
            },
            miss_distance: {
                astronomical: '0.0683831977',
                lunar: '26.6010639053',
                kilometers: '10229980.719708899',
                miles: '6356615.2590608462',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2102-09-01',
            close_approach_date_full: '2102-Sep-01 12:31',
            epoch_date_close_approach: 4186557060000,
            relative_velocity: {
                kilometers_per_second: '24.451252006',
                kilometers_per_hour: '88024.5072215384',
                miles_per_hour: '54695.0056121831',
            },
            miss_distance: {
                astronomical: '0.2850236372',
                lunar: '110.8741948708',
                kilometers: '42638929.024772764',
                miles: '26494601.9249775832',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2102-11-05',
            close_approach_date_full: '2102-Nov-05 19:35',
            epoch_date_close_approach: 4192198500000,
            relative_velocity: {
                kilometers_per_second: '33.435283056',
                kilometers_per_hour: '120367.0190015514',
                miles_per_hour: '74791.3846679362',
            },
            miss_distance: {
                astronomical: '0.0637178215',
                lunar: '24.7862325635',
                kilometers: '9532050.377440205',
                miles: '5922941.454096629',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2102-11-27',
            close_approach_date_full: '2102-Nov-27 17:14',
            epoch_date_close_approach: 4194090840000,
            relative_velocity: {
                kilometers_per_second: '21.1539885631',
                kilometers_per_hour: '76154.358827173',
                miles_per_hour: '47319.3570168064',
            },
            miss_distance: {
                astronomical: '0.1194111258',
                lunar: '46.4509279362',
                kilometers: '17863650.073982046',
                miles: '11099957.4441063948',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2103-08-04',
            close_approach_date_full: '2103-Aug-04 11:42',
            epoch_date_close_approach: 4215670920000,
            relative_velocity: {
                kilometers_per_second: '14.6091748869',
                kilometers_per_hour: '52593.0295927446',
                miles_per_hour: '32679.2633044473',
            },
            miss_distance: {
                astronomical: '0.1078645188',
                lunar: '41.9592978132',
                kilometers: '16136302.261054956',
                miles: '10026633.2838561528',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2104-07-15',
            close_approach_date_full: '2104-Jul-15 05:15',
            epoch_date_close_approach: 4245542100000,
            relative_velocity: {
                kilometers_per_second: '37.8183171234',
                kilometers_per_hour: '136145.9416441244',
                miles_per_hour: '84595.7935732617',
            },
            miss_distance: {
                astronomical: '0.0854910352',
                lunar: '33.2560126928',
                kilometers: '12789276.770015024',
                miles: '7946888.0827903712',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2104-08-09',
            close_approach_date_full: '2104-Aug-09 19:00',
            epoch_date_close_approach: 4247751600000,
            relative_velocity: {
                kilometers_per_second: '33.3443491092',
                kilometers_per_hour: '120039.6567931236',
                miles_per_hour: '74587.9745223717',
            },
            miss_distance: {
                astronomical: '0.4798596335',
                lunar: '186.6653974315',
                kilometers: '71785979.070580645',
                miles: '44605738.998857101',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2107-08-28',
            close_approach_date_full: '2107-Aug-28 21:57',
            epoch_date_close_approach: 4344011820000,
            relative_velocity: {
                kilometers_per_second: '14.7180859056',
                kilometers_per_hour: '52985.1092600293',
                miles_per_hour: '32922.8863621554',
            },
            miss_distance: {
                astronomical: '0.1400166592',
                lunar: '54.4664804288',
                kilometers: '20946193.980835904',
                miles: '13015361.4093633152',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2108-07-29',
            close_approach_date_full: '2108-Jul-29 15:39',
            epoch_date_close_approach: 4373019540000,
            relative_velocity: {
                kilometers_per_second: '23.5158107431',
                kilometers_per_hour: '84656.9186751233',
                miles_per_hour: '52602.5170512176',
            },
            miss_distance: {
                astronomical: '0.2071028403',
                lunar: '80.5630048767',
                kilometers: '30982143.779830161',
                miles: '19251411.4449757818',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2108-12-25',
            close_approach_date_full: '2108-Dec-25 14:32',
            epoch_date_close_approach: 4385889120000,
            relative_velocity: {
                kilometers_per_second: '44.6081734237',
                kilometers_per_hour: '160589.4243254928',
                miles_per_hour: '99784.0231315819',
            },
            miss_distance: {
                astronomical: '0.0833718139',
                lunar: '32.4316356071',
                kilometers: '12472245.777476393',
                miles: '7749894.1587565034',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2109-09-03',
            close_approach_date_full: '2109-Sep-03 12:02',
            epoch_date_close_approach: 4407652920000,
            relative_velocity: {
                kilometers_per_second: '20.7105749693',
                kilometers_per_hour: '74558.0698895988',
                miles_per_hour: '46327.485148901',
            },
            miss_distance: {
                astronomical: '0.1314025837',
                lunar: '51.1156050593',
                kilometers: '19657546.634016719',
                miles: '12214633.0783159622',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2110-09-04',
            close_approach_date_full: '2110-Sep-04 10:34',
            epoch_date_close_approach: 4439270040000,
            relative_velocity: {
                kilometers_per_second: '35.3957876326',
                kilometers_per_hour: '127424.8354773053',
                miles_per_hour: '79176.8373553289',
            },
            miss_distance: {
                astronomical: '0.0375972627',
                lunar: '14.6253351903',
                kilometers: '5624470.417750449',
                miles: '3494883.8576722362',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2111-09-04',
            close_approach_date_full: '2111-Sep-04 16:53',
            epoch_date_close_approach: 4470828780000,
            relative_velocity: {
                kilometers_per_second: '20.9633683411',
                kilometers_per_hour: '75468.1260279312',
                miles_per_hour: '46892.9586421887',
            },
            miss_distance: {
                astronomical: '0.2016446285',
                lunar: '78.4397604865',
                kilometers: '30165606.920541295',
                miles: '18744038.967788071',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2112-05-15',
            close_approach_date_full: '2112-May-15 02:28',
            epoch_date_close_approach: 4492722480000,
            relative_velocity: {
                kilometers_per_second: '28.6027138127',
                kilometers_per_hour: '102969.7697257279',
                miles_per_hour: '63981.4105276336',
            },
            miss_distance: {
                astronomical: '0.0620969157',
                lunar: '24.1557002073',
                kilometers: '9289566.322289559',
                miles: '5772268.8490075542',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2112-07-28',
            close_approach_date_full: '2112-Jul-28 14:51',
            epoch_date_close_approach: 4499160660000,
            relative_velocity: {
                kilometers_per_second: '15.7523468079',
                kilometers_per_hour: '56708.4485084317',
                miles_per_hour: '35236.4245745864',
            },
            miss_distance: {
                astronomical: '0.0464137775',
                lunar: '18.0549594475',
                kilometers: '6943402.252653925',
                miles: '4314430.097017165',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2115-08-25',
            close_approach_date_full: '2115-Aug-25 14:46',
            epoch_date_close_approach: 4596187560000,
            relative_velocity: {
                kilometers_per_second: '30.8733947557',
                kilometers_per_hour: '111144.2211206165',
                miles_per_hour: '69060.6967290853',
            },
            miss_distance: {
                astronomical: '0.4501359416',
                lunar: '175.1028812824',
                kilometers: '67339378.073804392',
                miles: '41842749.2609969296',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2116-08-19',
            close_approach_date_full: '2116-Aug-19 21:23',
            epoch_date_close_approach: 4627315380000,
            relative_velocity: {
                kilometers_per_second: '14.3176577674',
                kilometers_per_hour: '51543.5679625054',
                miles_per_hour: '32027.1686598134',
            },
            miss_distance: {
                astronomical: '0.1493196991',
                lunar: '58.0853629499',
                kilometers: '22337908.934400917',
                miles: '13880132.9815179746',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2117-08-02',
            close_approach_date_full: '2117-Aug-02 07:27',
            epoch_date_close_approach: 4657332420000,
            relative_velocity: {
                kilometers_per_second: '26.8102776537',
                kilometers_per_hour: '96516.999553369',
                miles_per_hour: '59971.910083592',
            },
            miss_distance: {
                astronomical: '0.3003469515',
                lunar: '116.8349641335',
                kilometers: '44931264.205393305',
                miles: '27918992.956325409',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2120-09-04',
            close_approach_date_full: '2120-Sep-04 20:41',
            epoch_date_close_approach: 4754925660000,
            relative_velocity: {
                kilometers_per_second: '18.1717907602',
                kilometers_per_hour: '65418.4467367765',
                miles_per_hour: '40648.4787515265',
            },
            miss_distance: {
                astronomical: '0.1481823456',
                lunar: '57.6429324384',
                kilometers: '22167763.273363872',
                miles: '13774409.3702185536',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2121-07-26',
            close_approach_date_full: '2121-Jul-26 20:53',
            epoch_date_close_approach: 4783006380000,
            relative_velocity: {
                kilometers_per_second: '17.6778513122',
                kilometers_per_hour: '63640.2647237652',
                miles_per_hour: '39543.585600164',
            },
            miss_distance: {
                astronomical: '0.0308545919',
                lunar: '12.0024362491',
                kilometers: '4615781.227959253',
                miles: '2868113.4588655714',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2124-08-28',
            close_approach_date_full: '2124-Aug-28 23:15',
            epoch_date_close_approach: 4880560500000,
            relative_velocity: {
                kilometers_per_second: '27.4625283513',
                kilometers_per_hour: '98865.1020645097',
                miles_per_hour: '61430.9296689172',
            },
            miss_distance: {
                astronomical: '0.3619014631',
                lunar: '140.7796691459',
                kilometers: '54139688.029643597',
                miles: '33640842.1950397586',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2125-08-11',
            close_approach_date_full: '2125-Aug-11 07:21',
            epoch_date_close_approach: 4910570460000,
            relative_velocity: {
                kilometers_per_second: '14.2965982262',
                kilometers_per_hour: '51467.7536144089',
                miles_per_hour: '31980.060572242',
            },
            miss_distance: {
                astronomical: '0.138725477',
                lunar: '53.964210553',
                kilometers: '20753035.87393399',
                miles: '12895338.527269462',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2125-12-16',
            close_approach_date_full: '2125-Dec-16 08:59',
            epoch_date_close_approach: 4921549140000,
            relative_velocity: {
                kilometers_per_second: '25.0985558424',
                kilometers_per_hour: '90354.801032797',
                miles_per_hour: '56142.9595639621',
            },
            miss_distance: {
                astronomical: '0.0896445131',
                lunar: '34.8717155959',
                kilometers: '13410628.216947097',
                miles: '8332977.9686880586',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2126-08-06',
            close_approach_date_full: '2126-Aug-06 16:24',
            epoch_date_close_approach: 4941707040000,
            relative_velocity: {
                kilometers_per_second: '30.3068980306',
                kilometers_per_hour: '109104.832910088',
                miles_per_hour: '67793.5002046044',
            },
            miss_distance: {
                astronomical: '0.3979723498',
                lunar: '154.8112440722',
                kilometers: '59535815.848974926',
                miles: '36993840.5413729388',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2127-08-26',
            close_approach_date_full: '2127-Aug-26 04:58',
            epoch_date_close_approach: 4974929880000,
            relative_velocity: {
                kilometers_per_second: '29.775533083',
                kilometers_per_hour: '107191.9190988871',
                miles_per_hour: '66604.8899534168',
            },
            miss_distance: {
                astronomical: '0.0643749831',
                lunar: '25.0418684259',
                kilometers: '9630360.353045997',
                miles: '5984028.4402968786',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2129-05-04',
            close_approach_date_full: '2129-May-04 19:12',
            epoch_date_close_approach: 5028289920000,
            relative_velocity: {
                kilometers_per_second: '34.4307402378',
                kilometers_per_hour: '123950.6648561102',
                miles_per_hour: '77018.1228379536',
            },
            miss_distance: {
                astronomical: '0.0666677827',
                lunar: '25.9337674703',
                kilometers: '9973358.289542849',
                miles: '6197157.4751113562',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2129-09-02',
            close_approach_date_full: '2129-Sep-02 17:57',
            epoch_date_close_approach: 5038739820000,
            relative_velocity: {
                kilometers_per_second: '15.7301119199',
                kilometers_per_hour: '56628.4029116681',
                miles_per_hour: '35186.6873536418',
            },
            miss_distance: {
                astronomical: '0.1299554104',
                lunar: '50.5526546456',
                kilometers: '19441052.590815848',
                miles: '12080109.9177927824',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2130-07-28',
            close_approach_date_full: '2130-Jul-28 02:24',
            epoch_date_close_approach: 5067109440000,
            relative_velocity: {
                kilometers_per_second: '20.8099885742',
                kilometers_per_hour: '74915.9588672831',
                miles_per_hour: '46549.8634417293',
            },
            miss_distance: {
                astronomical: '0.1275735884',
                lunar: '49.6261258876',
                kilometers: '19084737.092896708',
                miles: '11858705.7340342504',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2131-01-12',
            close_approach_date_full: '2131-Jan-12 05:54',
            epoch_date_close_approach: 5081637240000,
            relative_velocity: {
                kilometers_per_second: '38.9901515215',
                kilometers_per_hour: '140364.5454772366',
                miles_per_hour: '87217.0699383418',
            },
            miss_distance: {
                astronomical: '0.0937448743',
                lunar: '36.4667561027',
                kilometers: '14024033.518697741',
                miles: '8714130.3489251858',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2133-09-02',
            close_approach_date_full: '2133-Sep-02 05:39',
            epoch_date_close_approach: 5164925940000,
            relative_velocity: {
                kilometers_per_second: '23.6518806069',
                kilometers_per_hour: '85146.770184934',
                miles_per_hour: '52906.891729633',
            },
            miss_distance: {
                astronomical: '0.2652429578',
                lunar: '103.1795105842',
                kilometers: '39679781.519379886',
                miles: '24655872.9281229868',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2134-08-02',
            close_approach_date_full: '2134-Aug-02 15:25',
            epoch_date_close_approach: 5193818700000,
            relative_velocity: {
                kilometers_per_second: '14.7556724738',
                kilometers_per_hour: '53120.420905617',
                miles_per_hour: '33006.9637566041',
            },
            miss_distance: {
                astronomical: '0.0961834415',
                lunar: '37.4153587435',
                kilometers: '14388837.977669605',
                miles: '8940809.328486349',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2135-06-24',
            close_approach_date_full: '2135-Jun-24 22:43',
            epoch_date_close_approach: 5222011380000,
            relative_velocity: {
                kilometers_per_second: '41.0702758501',
                kilometers_per_hour: '147852.9930603197',
                miles_per_hour: '91870.1000490636',
            },
            miss_distance: {
                astronomical: '0.0622639266',
                lunar: '24.2206674474',
                kilometers: '9314550.797196342',
                miles: '5787793.4818278396',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2137-03-04',
            close_approach_date_full: '2137-Mar-04 00:34',
            epoch_date_close_approach: 5275413240000,
            relative_velocity: {
                kilometers_per_second: '32.1765699185',
                kilometers_per_hour: '115835.6517064477',
                miles_per_hour: '71975.769250598',
            },
            miss_distance: {
                astronomical: '0.0387526225',
                lunar: '15.0747701525',
                kilometers: '5797309.782914075',
                miles: '3602281.259101235',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2138-08-26',
            close_approach_date_full: '2138-Aug-26 20:49',
            epoch_date_close_approach: 5322142140000,
            relative_velocity: {
                kilometers_per_second: '14.5651919507',
                kilometers_per_hour: '52434.6910224026',
                miles_per_hour: '32580.8778744479',
            },
            miss_distance: {
                astronomical: '0.1440201529',
                lunar: '56.0238394781',
                kilometers: '21545108.110914323',
                miles: '13387509.3930627374',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2138-11-13',
            close_approach_date_full: '2138-Nov-13 12:07',
            epoch_date_close_approach: 5328936420000,
            relative_velocity: {
                kilometers_per_second: '27.9531705454',
                kilometers_per_hour: '100631.4139633172',
                miles_per_hour: '62528.447192929',
            },
            miss_distance: {
                astronomical: '0.0815441467',
                lunar: '31.7206730663',
                kilometers: '12198830.657287529',
                miles: '7580001.8810807402',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2139-07-31',
            close_approach_date_full: '2139-Jul-31 09:14',
            epoch_date_close_approach: 5351390040000,
            relative_velocity: {
                kilometers_per_second: '24.389350663',
                kilometers_per_hour: '87801.6623868641',
                miles_per_hour: '54556.5384981045',
            },
            miss_distance: {
                astronomical: '0.2315445197',
                lunar: '90.0708181633',
                kilometers: '34638566.957293039',
                miles: '21523407.4535963782',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2142-09-05',
            close_approach_date_full: '2142-Sep-05 02:47',
            epoch_date_close_approach: 5449171620000,
            relative_velocity: {
                kilometers_per_second: '20.0670767338',
                kilometers_per_hour: '72241.4762417534',
                miles_per_hour: '44888.0439458829',
            },
            miss_distance: {
                astronomical: '0.18296999',
                lunar: '71.17532611',
                kilometers: '27371920.7779213',
                miles: '17008122.89426194',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2143-07-28',
            close_approach_date_full: '2143-Jul-28 12:48',
            epoch_date_close_approach: 5477374080000,
            relative_velocity: {
                kilometers_per_second: '16.2526241791',
                kilometers_per_hour: '58509.4470447744',
                miles_per_hour: '36355.4950262377',
            },
            miss_distance: {
                astronomical: '0.0266528352',
                lunar: '10.3679528928',
                kilometers: '3987207.375381024',
                miles: '2477535.7782011712',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2146-08-26',
            close_approach_date_full: '2146-Aug-26 16:03',
            epoch_date_close_approach: 5574585780000,
            relative_velocity: {
                kilometers_per_second: '29.9337954235',
                kilometers_per_hour: '107761.6635247361',
                miles_per_hour: '66958.9069829117',
            },
            miss_distance: {
                astronomical: '0.4257055998',
                lunar: '165.5994783222',
                kilometers: '63684650.977152426',
                miles: '39571807.1481224388',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2147-08-18',
            close_approach_date_full: '2147-Aug-18 10:56',
            epoch_date_close_approach: 5605412160000,
            relative_velocity: {
                kilometers_per_second: '14.2921618316',
                kilometers_per_hour: '51451.7825936016',
                miles_per_hour: '31970.1368010076',
            },
            miss_distance: {
                astronomical: '0.1490343503',
                lunar: '57.9743622667',
                kilometers: '22295221.361713861',
                miles: '13853608.1538228418',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2148-08-03',
            close_approach_date_full: '2148-Aug-03 05:46',
            epoch_date_close_approach: 5635719960000,
            relative_velocity: {
                kilometers_per_second: '27.6958877546',
                kilometers_per_hour: '99705.195916686',
                miles_per_hour: '61952.931318343',
            },
            miss_distance: {
                astronomical: '0.325693152',
                lunar: '126.694636128',
                kilometers: '48723001.81278624',
                miles: '30275069.452840512',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2149-09-03',
            close_approach_date_full: '2149-Sep-03 02:48',
            epoch_date_close_approach: 5669923680000,
            relative_velocity: {
                kilometers_per_second: '31.0311251467',
                kilometers_per_hour: '111712.0505281304',
                miles_per_hour: '69413.5238406597',
            },
            miss_distance: {
                astronomical: '0.1259220931',
                lunar: '48.9836942159',
                kilometers: '18837676.913701697',
                miles: '11705189.6573175386',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2151-09-05',
            close_approach_date_full: '2151-Sep-05 14:27',
            epoch_date_close_approach: 5733210420000,
            relative_velocity: {
                kilometers_per_second: '17.5085875424',
                kilometers_per_hour: '63030.9151526285',
                miles_per_hour: '39164.9594735874',
            },
            miss_distance: {
                astronomical: '0.1394003688',
                lunar: '54.2267434632',
                kilometers: '20853998.249694456',
                miles: '12958073.6385012528',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2152-06-14',
            close_approach_date_full: '2152-Jun-14 15:56',
            epoch_date_close_approach: 5757666960000,
            relative_velocity: {
                kilometers_per_second: '26.5495660266',
                kilometers_per_hour: '95578.4376957571',
                miles_per_hour: '59388.7242448998',
            },
            miss_distance: {
                astronomical: '0.0797816832',
                lunar: '31.0350747648',
                kilometers: '11935169.871734784',
                miles: '7416170.6658926592',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2152-07-26',
            close_approach_date_full: '2152-Jul-26 17:38',
            epoch_date_close_approach: 5761301880000,
            relative_velocity: {
                kilometers_per_second: '18.3379810063',
                kilometers_per_hour: '66016.7316226778',
                miles_per_hour: '41020.2297129911',
            },
            miss_distance: {
                astronomical: '0.0511864943',
                lunar: '19.9115462827',
                kilometers: '7657390.520047141',
                miles: '4758081.8339709058',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2154-02-22',
            close_approach_date_full: '2154-Feb-22 07:11',
            epoch_date_close_approach: 5811030660000,
            relative_velocity: {
                kilometers_per_second: '30.9800395232',
                kilometers_per_hour: '111528.1422836032',
                miles_per_hour: '69299.2504094978',
            },
            miss_distance: {
                astronomical: '0.0614626047',
                lunar: '23.9089532283',
                kilometers: '9194674.747771989',
                miles: '5713305.9587478882',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2155-08-30',
            close_approach_date_full: '2155-Aug-30 18:22',
            epoch_date_close_approach: 5858936520000,
            relative_velocity: {
                kilometers_per_second: '26.6757551939',
                kilometers_per_hour: '96032.7186981617',
                miles_per_hour: '59670.9967933105',
            },
            miss_distance: {
                astronomical: '0.3416649455',
                lunar: '132.9076637995',
                kilometers: '51112348.100466085',
                miles: '31759740.390898573',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2155-11-01',
            close_approach_date_full: '2155-Nov-01 18:14',
            epoch_date_close_approach: 5864379240000,
            relative_velocity: {
                kilometers_per_second: '35.3767076434',
                kilometers_per_hour: '127356.1475161979',
                miles_per_hour: '79134.1573274953',
            },
            miss_distance: {
                astronomical: '0.0705729629',
                lunar: '27.4528825681',
                kilometers: '10557564.929429023',
                miles: '6560166.6481775974',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2156-06-09',
            close_approach_date_full: '2156-Jun-09 03:14',
            epoch_date_close_approach: 5883419640000,
            relative_velocity: {
                kilometers_per_second: '29.9036807367',
                kilometers_per_hour: '107653.2506522136',
                miles_per_hour: '66891.5434399824',
            },
            miss_distance: {
                astronomical: '0.1058374543',
                lunar: '41.1707697227',
                kilometers: '15833057.729502341',
                miles: '9838205.8694446658',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2156-08-09',
            close_approach_date_full: '2156-Aug-09 07:54',
            epoch_date_close_approach: 5888706840000,
            relative_velocity: {
                kilometers_per_second: '14.3452789017',
                kilometers_per_hour: '51643.0040462975',
                miles_per_hour: '32088.954375323',
            },
            miss_distance: {
                astronomical: '0.1332389611',
                lunar: '51.8299558679',
                kilometers: '19932264.781572857',
                miles: '12385335.0196531466',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2157-07-11',
            close_approach_date_full: '2157-Jul-11 02:43',
            epoch_date_close_approach: 5917718580000,
            relative_velocity: {
                kilometers_per_second: '39.710140548',
                kilometers_per_hour: '142956.5059727406',
                miles_per_hour: '88827.6133917843',
            },
            miss_distance: {
                astronomical: '0.0988477965',
                lunar: '38.4517928385',
                kilometers: '14787419.810593455',
                miles: '9188476.594981479',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2157-08-07',
            close_approach_date_full: '2157-Aug-07 11:36',
            epoch_date_close_approach: 5920083360000,
            relative_velocity: {
                kilometers_per_second: '31.0689669087',
                kilometers_per_hour: '111848.2808712246',
                miles_per_hour: '69498.1720780118',
            },
            miss_distance: {
                astronomical: '0.417810658',
                lunar: '162.528345962',
                kilometers: '62503584.50009846',
                miles: '38837926.469780348',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2160-09-01',
            close_approach_date_full: '2160-Sep-01 18:24',
            epoch_date_close_approach: 6016962240000,
            relative_velocity: {
                kilometers_per_second: '15.4542121456',
                kilometers_per_hour: '55635.1637241146',
                miles_per_hour: '34569.5271484645',
            },
            miss_distance: {
                astronomical: '0.1315752162',
                lunar: '51.1827591018',
                kilometers: '19683372.088309494',
                miles: '12230680.2714952572',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2161-07-28',
            close_approach_date_full: '2161-Jul-28 09:11',
            epoch_date_close_approach: 6045441060000,
            relative_velocity: {
                kilometers_per_second: '21.382605333',
                kilometers_per_hour: '76977.3791987377',
                miles_per_hour: '47830.749869349',
            },
            miss_distance: {
                astronomical: '0.1437766438',
                lunar: '55.9291144382',
                kilometers: '21508679.668228706',
                miles: '13364873.8084039028',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2161-12-21',
            close_approach_date_full: '2161-Dec-21 12:50',
            epoch_date_close_approach: 6058068600000,
            relative_velocity: {
                kilometers_per_second: '41.1841672646',
                kilometers_per_hour: '148263.0021524113',
                miles_per_hour: '92124.8637540914',
            },
            miss_distance: {
                astronomical: '0.0628379411',
                lunar: '24.4439590879',
                kilometers: '9400422.143745457',
                miles: '5841151.4623310266',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2163-03-16',
            close_approach_date_full: '2163-Mar-16 08:34',
            epoch_date_close_approach: 6096933240000,
            relative_velocity: {
                kilometers_per_second: '29.1075595793',
                kilometers_per_hour: '104787.2144854908',
                miles_per_hour: '65110.7000229429',
            },
            miss_distance: {
                astronomical: '0.0921606562',
                lunar: '35.8504952618',
                kilometers: '13787037.865322294',
                miles: '8566868.0785598972',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2163-08-31',
            close_approach_date_full: '2163-Aug-31 14:45',
            epoch_date_close_approach: 6111470700000,
            relative_velocity: {
                kilometers_per_second: '32.2287147473',
                kilometers_per_hour: '116023.3730904229',
                miles_per_hour: '72092.4120183242',
            },
            miss_distance: {
                astronomical: '0.0385108101',
                lunar: '14.9807051289',
                kilometers: '5761135.162934487',
                miles: '3579803.3925584406',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2164-09-02',
            close_approach_date_full: '2164-Sep-02 15:03',
            epoch_date_close_approach: 6143266980000,
            relative_velocity: {
                kilometers_per_second: '23.1060530845',
                kilometers_per_hour: '83181.7911041122',
                miles_per_hour: '51685.9301446635',
            },
            miss_distance: {
                astronomical: '0.2522007257',
                lunar: '98.1060822973',
                kilometers: '37728691.377174259',
                miles: '23443521.7312284142',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2165-05-12',
            close_approach_date_full: '2165-May-12 04:16',
            epoch_date_close_approach: 6165000960000,
            relative_velocity: {
                kilometers_per_second: '27.9448360445',
                kilometers_per_hour: '100601.4097600733',
                miles_per_hour: '62509.8037478633',
            },
            miss_distance: {
                astronomical: '0.0821285166',
                lunar: '31.9479929574',
                kilometers: '12286251.149619642',
                miles: '7634322.4561373796',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2165-08-01',
            close_approach_date_full: '2165-Aug-01 13:30',
            epoch_date_close_approach: 6172032600000,
            relative_velocity: {
                kilometers_per_second: '14.8944137575',
                kilometers_per_hour: '53619.8895269345',
                miles_per_hour: '33317.314134111',
            },
            miss_distance: {
                astronomical: '0.0879649082',
                lunar: '34.2183492898',
                kilometers: '13159362.901465534',
                miles: '8176848.9414470092',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2169-08-25',
            close_approach_date_full: '2169-Aug-25 15:24',
            epoch_date_close_approach: 6300343440000,
            relative_velocity: {
                kilometers_per_second: '14.5055895329',
                kilometers_per_hour: '52220.1223183007',
                miles_per_hour: '32447.5532260574',
            },
            miss_distance: {
                astronomical: '0.1461587834',
                lunar: '56.8557667426',
                kilometers: '21865042.678431358',
                miles: '13586307.5149264204',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2169-12-20',
            close_approach_date_full: '2169-Dec-20 15:52',
            epoch_date_close_approach: 6310453920000,
            relative_velocity: {
                kilometers_per_second: '28.4071891863',
                kilometers_per_hour: '102265.8810708413',
                miles_per_hour: '63544.0414909347',
            },
            miss_distance: {
                astronomical: '0.0807366292',
                lunar: '31.4065487588',
                kilometers: '12078027.759299804',
                miles: '7504938.4410091352',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2170-07-31',
            close_approach_date_full: '2170-Jul-31 18:13',
            epoch_date_close_approach: 6329729580000,
            relative_velocity: {
                kilometers_per_second: '24.8212978353',
                kilometers_per_hour: '89356.6722072542',
                miles_per_hour: '55522.7611278908',
            },
            miss_distance: {
                astronomical: '0.2442462306',
                lunar: '95.0117837034',
                kilometers: '36538715.853288822',
                miles: '22704105.2278848636',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2173-09-05',
            close_approach_date_full: '2173-Sep-05 05:11',
            epoch_date_close_approach: 6427487460000,
            relative_velocity: {
                kilometers_per_second: '19.7012247151',
                kilometers_per_hour: '70924.4089742581',
                miles_per_hour: '44069.6695651439',
            },
            miss_distance: {
                astronomical: '0.1754167123',
                lunar: '68.2371010847',
                kilometers: '26241966.522482801',
                miles: '16306001.8777166138',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2174-07-28',
            close_approach_date_full: '2174-Jul-28 02:52',
            epoch_date_close_approach: 6455645520000,
            relative_velocity: {
                kilometers_per_second: '16.5244409103',
                kilometers_per_hour: '59487.9872769155',
                miles_per_hour: '36963.5218721478',
            },
            miss_distance: {
                astronomical: '0.0185902996',
                lunar: '7.2316265444',
                kilometers: '2781069.222821852',
                miles: '1728076.2830994776',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2176-09-25',
            close_approach_date_full: '2176-Sep-25 20:14',
            epoch_date_close_approach: 6523964040000,
            relative_velocity: {
                kilometers_per_second: '27.4777643907',
                kilometers_per_hour: '98919.9518065391',
                miles_per_hour: '61465.0111655687',
            },
            miss_distance: {
                astronomical: '0.0674164328',
                lunar: '26.2249923592',
                kilometers: '10085354.749878136',
                miles: '6266748.8485688368',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2177-08-27',
            close_approach_date_full: '2177-Aug-27 01:42',
            epoch_date_close_approach: 6552927720000,
            relative_velocity: {
                kilometers_per_second: '29.5408049587',
                kilometers_per_hour: '106346.8978511868',
                miles_per_hour: '66079.8266120333',
            },
            miss_distance: {
                astronomical: '0.4157511555',
                lunar: '161.7271994895',
                kilometers: '62195487.312838785',
                miles: '38646483.754933833',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2178-08-17',
            close_approach_date_full: '2178-Aug-17 08:49',
            epoch_date_close_approach: 6583625340000,
            relative_velocity: {
                kilometers_per_second: '14.2927962665',
                kilometers_per_hour: '51454.0665595703',
                miles_per_hour: '31971.5559686397',
            },
            miss_distance: {
                astronomical: '0.1486288541',
                lunar: '57.8166242449',
                kilometers: '22234559.993900767',
                miles: '13815914.9277219046',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2178-12-12',
            close_approach_date_full: '2178-Dec-12 14:34',
            epoch_date_close_approach: 6593754840000,
            relative_velocity: {
                kilometers_per_second: '27.3076348925',
                kilometers_per_hour: '98307.4856129269',
                miles_per_hour: '61084.4484909878',
            },
            miss_distance: {
                astronomical: '0.0750639684',
                lunar: '29.1998837076',
                kilometers: '11229409.786387308',
                miles: '6977631.6841805304',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2179-08-04',
            close_approach_date_full: '2179-Aug-04 12:48',
            epoch_date_close_approach: 6614052480000,
            relative_velocity: {
                kilometers_per_second: '28.0661203707',
                kilometers_per_hour: '101038.0333343483',
                miles_per_hour: '62781.1046571121',
            },
            miss_distance: {
                astronomical: '0.335183367',
                lunar: '130.386329763',
                kilometers: '50142717.76262829',
                miles: '31157240.037278802',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2180-08-21',
            close_approach_date_full: '2180-Aug-21 00:07',
            epoch_date_close_approach: 6647098020000,
            relative_velocity: {
                kilometers_per_second: '31.223043589',
                kilometers_per_hour: '112402.956920422',
                miles_per_hour: '69842.8262042477',
            },
            miss_distance: {
                astronomical: '0.0610130198',
                lunar: '23.7340647022',
                kilometers: '9127417.804347826',
                miles: '5671514.4320029588',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2182-04-30',
            close_approach_date_full: '2182-Apr-30 07:05',
            epoch_date_close_approach: 6700431900000,
            relative_velocity: {
                kilometers_per_second: '35.1689363173',
                kilometers_per_hour: '126608.1707424514',
                miles_per_hour: '78669.3936482748',
            },
            miss_distance: {
                astronomical: '0.0693089862',
                lunar: '26.9611956318',
                kilometers: '10368476.707379394',
                miles: '6442672.6752638772',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2182-09-05',
            close_approach_date_full: '2182-Sep-05 09:40',
            epoch_date_close_approach: 6711500400000,
            relative_velocity: {
                kilometers_per_second: '17.2524966839',
                kilometers_per_hour: '62108.9880622124',
                miles_per_hour: '38592.1098323231',
            },
            miss_distance: {
                astronomical: '0.1373928478',
                lunar: '53.4458177942',
                kilometers: '20553677.384114186',
                miles: '12771462.9058843268',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2183-07-02',
            close_approach_date_full: '2183-Jul-02 18:08',
            epoch_date_close_approach: 6737450880000,
            relative_velocity: {
                kilometers_per_second: '25.9236508452',
                kilometers_per_hour: '93325.1430426419',
                miles_per_hour: '57988.6145755793',
            },
            miss_distance: {
                astronomical: '0.0537012464',
                lunar: '20.8897848496',
                kilometers: '8033592.077785168',
                miles: '4991842.6423165984',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2183-07-27',
            close_approach_date_full: '2183-Jul-27 16:07',
            epoch_date_close_approach: 6739603620000,
            relative_velocity: {
                kilometers_per_second: '18.6028430426',
                kilometers_per_hour: '66970.2349534687',
                miles_per_hour: '41612.6996020595',
            },
            miss_distance: {
                astronomical: '0.0587776806',
                lunar: '22.8645177534',
                kilometers: '8793015.821300322',
                miles: '5463726.6749835636',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2184-01-07',
            close_approach_date_full: '2184-Jan-07 12:34',
            epoch_date_close_approach: 6753760440000,
            relative_velocity: {
                kilometers_per_second: '39.1459203377',
                kilometers_per_hour: '140925.3132156192',
                miles_per_hour: '87565.5092033385',
            },
            miss_distance: {
                astronomical: '0.0944995113',
                lunar: '36.7603098957',
                kilometers: '14136925.606520931',
                miles: '8784278.2394976078',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2186-08-30',
            close_approach_date_full: '2186-Aug-30 23:06',
            epoch_date_close_approach: 6837260760000,
            relative_velocity: {
                kilometers_per_second: '26.3954166915',
                kilometers_per_hour: '95023.5000894652',
                miles_per_hour: '59043.9075972568',
            },
            miss_distance: {
                astronomical: '0.3348529347',
                lunar: '130.2577915983',
                kilometers: '50093285.794369089',
                miles: '31126524.4365038682',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2187-08-09',
            close_approach_date_full: '2187-Aug-09 13:32',
            epoch_date_close_approach: 6866947920000,
            relative_velocity: {
                kilometers_per_second: '14.3703703047',
                kilometers_per_hour: '51733.3330968685',
                miles_per_hour: '32145.0813345514',
            },
            miss_distance: {
                astronomical: '0.1311846129',
                lunar: '51.0308144181',
                kilometers: '19624938.666614523',
                miles: '12194371.4269174974',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2188-06-18',
            close_approach_date_full: '2188-Jun-18 18:11',
            epoch_date_close_approach: 6894094260000,
            relative_velocity: {
                kilometers_per_second: '43.0634419105',
                kilometers_per_hour: '155028.3908778612',
                miles_per_hour: '96328.6132096355',
            },
            miss_distance: {
                astronomical: '0.0737602048',
                lunar: '28.6927196672',
                kilometers: '11034369.528843776',
                miles: '6856439.2879090688',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2188-08-07',
            close_approach_date_full: '2188-Aug-07 17:05',
            epoch_date_close_approach: 6898410300000,
            relative_velocity: {
                kilometers_per_second: '31.296368475',
                kilometers_per_hour: '112666.926510032',
                miles_per_hour: '70006.8466417474',
            },
            miss_distance: {
                astronomical: '0.4243419789',
                lunar: '165.0690297921',
                kilometers: '63480656.195024943',
                miles: '39445050.6682844934',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2190-02-26',
            close_approach_date_full: '2190-Feb-26 12:44',
            epoch_date_close_approach: 6947469840000,
            relative_velocity: {
                kilometers_per_second: '34.4803612099',
                kilometers_per_hour: '124129.3003555475',
                miles_per_hour: '77129.1199903678',
            },
            miss_distance: {
                astronomical: '0.035953667',
                lunar: '13.985976463',
                kilometers: '5378592.00188929',
                miles: '3342102.094640602',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2190-04-08',
            close_approach_date_full: '2190-Apr-08 00:43',
            epoch_date_close_approach: 6950968980000,
            relative_velocity: {
                kilometers_per_second: '24.9794178758',
                kilometers_per_hour: '89925.9043530398',
                miles_per_hour: '55876.4598464763',
            },
            miss_distance: {
                astronomical: '0.0543818003',
                lunar: '21.1545203167',
                kilometers: '8135401.491645361',
                miles: '5055104.0786175418',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2191-09-02',
            close_approach_date_full: '2191-Sep-02 09:17',
            epoch_date_close_approach: 6995236620000,
            relative_velocity: {
                kilometers_per_second: '15.362574798',
                kilometers_per_hour: '55305.2692728115',
                miles_per_hour: '34364.5435656534',
            },
            miss_distance: {
                astronomical: '0.1327627231',
                lunar: '51.6446992859',
                kilometers: '19861020.591159797',
                miles: '12341065.9325153186',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2191-11-07',
            close_approach_date_full: '2191-Nov-07 02:57',
            epoch_date_close_approach: 7000916220000,
            relative_velocity: {
                kilometers_per_second: '28.4195279472',
                kilometers_per_hour: '102310.3006097436',
                miles_per_hour: '63571.6420649821',
            },
            miss_distance: {
                astronomical: '0.0643046431',
                lunar: '25.0145061659',
                kilometers: '9619837.638870197',
                miles: '5977489.9289028386',
            },
            orbiting_body: 'Merc',
        },
        {
            close_approach_date: '2192-07-28',
            close_approach_date_full: '2192-Jul-28 09:17',
            epoch_date_close_approach: 7023748620000,
            relative_velocity: {
                kilometers_per_second: '21.4820120719',
                kilometers_per_hour: '77335.2434588022',
                miles_per_hour: '48053.1128036096',
            },
            miss_distance: {
                astronomical: '0.1470282142',
                lunar: '57.1939753238',
                kilometers: '21995107.674223754',
                miles: '13667126.1557016452',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2195-09-03',
            close_approach_date_full: '2195-Sep-03 14:04',
            epoch_date_close_approach: 7121570640000,
            relative_velocity: {
                kilometers_per_second: '23.0727573162',
                kilometers_per_hour: '83061.926338414',
                miles_per_hour: '51611.4508406662',
            },
            miss_distance: {
                astronomical: '0.2514727734',
                lunar: '97.8229088526',
                kilometers: '37619791.263632658',
                miles: '23375854.3384523604',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2196-08-01',
            close_approach_date_full: '2196-Aug-01 09:17',
            epoch_date_close_approach: 7150324620000,
            relative_velocity: {
                kilometers_per_second: '14.9085146348',
                kilometers_per_hour: '53670.6526851007',
                miles_per_hour: '33348.8563864727',
            },
            miss_distance: {
                astronomical: '0.0876420542',
                lunar: '34.0927590838',
                kilometers: '13111064.630744554',
                miles: '8146837.7876566852',
            },
            orbiting_body: 'Earth',
        },
        {
            close_approach_date: '2197-01-12',
            close_approach_date_full: '2197-Jan-12 08:34',
            epoch_date_close_approach: 7164491640000,
            relative_velocity: {
                kilometers_per_second: '24.0273929432',
                kilometers_per_hour: '86498.6145954642',
                miles_per_hour: '53746.8752746094',
            },
            miss_distance: {
                astronomical: '0.0627001419',
                lunar: '24.3903551991',
                kilometers: '9379807.676937753',
                miles: '5828342.2266288714',
            },
            orbiting_body: 'Venus',
        },
        {
            close_approach_date: '2200-08-27',
            close_approach_date_full: '2200-Aug-27 00:50',
            epoch_date_close_approach: 7278684600000,
            relative_velocity: {
                kilometers_per_second: '14.5145716712',
                kilometers_per_hour: '52252.4580162397',
                miles_per_hour: '32467.6453712574',
            },
            miss_distance: {
                astronomical: '0.1459279712',
                lunar: '56.7659807968',
                kilometers: '21830513.664941344',
                miles: '13564852.1808407872',
            },
            orbiting_body: 'Earth',
        },
    ],
    orbital_data: {
        orbit_id: '27',
        orbit_determination_date: '2023-08-12 06:18:51',
        first_observation_date: '2010-07-18',
        last_observation_date: '2023-08-11',
        data_arc_in_days: 4772,
        observations_used: 109,
        orbit_uncertainty: '0',
        minimum_orbit_intersection: '.0157929',
        jupiter_tisserand_invariant: '8.150',
        epoch_osculation: '2460200.5',
        eccentricity: '.6758513054844492',
        semi_major_axis: '.6820286871513124',
        inclination: '12.5891988443098',
        ascending_node_longitude: '306.5205830794865',
        orbital_period: '205.7322567531268',
        perihelion_distance: '.221078708562253',
        perihelion_argument: '195.6369706230672',
        aphelion_distance: '1.142978665740372',
        perihelion_time: '2460272.159130239337',
        mean_anomaly: '234.607476273799',
        mean_motion: '1.749847134725161',
        equinox: 'J2000',
        orbit_class: {
            orbit_class_type: 'ATE',
            orbit_class_description: 'Near-Earth asteroid orbits similar to that of 2062 Aten',
            orbit_class_range: 'a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU',
        },
    },
    is_sentry_object: false,
};

export function getNeoById(id: string): Promise<IAsteroidDTO> {
    return Promise.resolve(neo);
}
