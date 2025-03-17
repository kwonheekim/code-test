// 배열 관련 문제
// 각 배열에서 대문자 M의 갯수를 구하시오.

const dataset = ['Braund, Mr. Owen Harris',
    'Cumings, Mrs. John Bradley (Florence Briggs Thayer)',
    'Heikkinen, Miss. Laina',
    'Futrelle, Mrs. Jacques Heath (Lily May Peel)',
    'Allen, Mr. William Henry',
    'Moran, Mr. James',
    'McCarthy, Mr. Timothy J',
    'Palsson, Master. Gosta Leonard',
    'Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)',
    'Nasser, Mrs. Nicholas (Adele Achem)',
    'Sandstrom, Miss. Marguerite Rut',
    'Bonnell, Miss. Elizabeth',
    'Saundercock, Mr. William Henry',
    'Andersson, Mr. Anders Johan',
    'Vestrom, Miss. Hulda Amanda Adolfina',
    'Hewlett, Mrs. (Mary D Kingcome) ',
    'Rice, Master. Eugene',
    'Williams, Mr. Charles Eugene',
    'Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)',
    'Masselmani, Mrs. Fatima',
    'Fynney, Mr. Joseph J',
    'Beesley, Mr. Lawrence',
    'McGowan, Miss. Anna "Annie"',
    'Sloper, Mr. William Thompson',
    'Palsson, Miss. Torborg Danira',
    'Asplund, Mrs. Carl Oscar (Selma Augusta Emilia Johansson)',
    'Emir, Mr. Farred Chehab',
    'Fortune, Mr. Charles Alexander',
    'Dwyer, Miss. Ellen "Nellie"',
    'Todoroff, Mr. Lalio']

    let count = 0;
    for( let i = 0; i < dataset.length; i++){
        
        for(let j = 0; j < dataset[i].length; j++){
            if(dataset[i][j] === 'M'){
                count++;
            }
        }
    }
    console.log(count); 