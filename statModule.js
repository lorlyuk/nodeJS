var statModule = (function (){
 var students = [
    {
       firstName: "Андрій", 
      secondName: "Іванов", 
       groupName: "1", 
       subject: [ 
            {
              name: "biology",    
              marks: ["нб",2,5,8,7,5,6,0,5,0]
            },
            {
             name: "english",
             marks: [0,2,5,8,7,5,6,"нб",5,0]
            },
            { 
              name: " music" ,
              marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
            },
            {
              name: "chemistry",
              marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
              name: "physics",
              marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            }
            ]
    },
    {
     firstName: "Василь", 
    secondName: "Баранов", 
     groupName: "1", 
       subject: [ 
            {
                name: "biology",    
                marks: ["нб",2,5,8,7,5,6,0,5,0]
            },
            {
                name: "english",
                marks: [0,2,5,8,7,5,6,"нб",5,0]
            },
            {   name: " music" ,
                marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
            },
            {
                 name: "chemistry",
                 marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
                name: "physics",
                marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            }
            ]
    },
    {
     firstName: "Петро", 
    secondName: "Гриб", 
     groupName: "1", 
        subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,0]
              },
              {
                  name: "english",
                  marks: [6,6,6,6,6,6,6,"нб",6,6]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
          },
     {
     firstName: "Боб", 
    secondName: "Лис", 
     groupName: "1", 
       subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,9]
              },
              {
                  name: "english",
                  marks: [0,2,5,8,7,5,6,"нб",5,0]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
          },
     {
     firstName: "Антоніна", 
    secondName: "Вовк", 
     groupName: "1", 
       subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,0]
              },
              {
                  name: "english",
                  marks: [0,2,5,8,7,5,6,"нб",5,0]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
          },
     {
     firstName: "Євген", 
    secondName: "Бук", 
     groupName: "2", 
       subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,0]
              },
              {
                  name: "english",
                  marks: [0,2,5,8,7,5,6,"нб",5,0]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
          },
   {
     firstName: "Катерина", 
    secondName: "Паук", 
     groupName: "2", 
       subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,9]
              },
              {
                  name: "english",
                  marks: [9,2,5,8,7,5,6,"нб",5,9]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,9]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,9]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
    },
    {
     firstName: "Алла", 
    secondName: "Грибюк", 
     groupName: "2", 
        subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,0]
              },
              {
                  name: "english",
                  marks: [0,2,5,8,7,5,6,"нб",5,0]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,5]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
   },
    {
     firstName: "Іван", 
    secondName: "Лисковець", 
     groupName: "2", 
      subject: [ 
            {
                name: "biology",    
                marks: ["нб",2,5,8,7,5,6,5,5,0]
            },
            {
                name: "english",
                marks: [0,2,5,8,7,5,6,"нб",5,0]
            },
            {   name: " music" ,
                marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
            },
            {
                 name: "chemistry",
                 marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
                name: "physics",
                marks: ["нб",2,5,8,7,5,6,"нб",5,5]
            }
    ]
   },
   {
     firstName: "Макар", 
    secondName: "Вовкович", 
     groupName: "2", 
        subject: [ 
            {
                name: "biology",    
                marks: ["нб",2,5,8,7,5,6,4,5,0]
            },
            {
                name: "english",
                marks: [0,2,5,8,7,5,6,"нб",5,4]
            },
            {   name: " music" ,
                marks:["нб",2,5,8,"нб",5,6,"нб",5,4]
            },
            {
                 name: "chemistry",
                 marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
                name: "physics",
                marks: ["нб",2,5,8,7,5,6,"нб",5,4]
            }
            ]
    },
    {
     firstName: "Анатолій", 
    secondName: "Петров", 
     groupName: "3", 
       subject: [ 
    {
                name: "biology",    
                marks: ["нб",2,5,8,7,5,6,0,5,0]
            },
            {
                name: "english",
                marks: [0,2,5,8,7,5,6,"нб",5,0]
            },
            {   name: " music" ,
                marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
            },
            {
                 name: "chemistry",
                 marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
                name: "physics",
                marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            }
            ]
    },
     {
     firstName: "Григорій", 
    secondName: "Акулов", 
     groupName: "3", 
        subject: [ 
            {
                name: "biology",    
                marks: ["нб",2,5,8,7,5,6,3,5,3]
            },
            {
                name: "english",
                marks: [0,2,5,8,7,5,6,"нб",5,3]
            },
            {   name: " music" ,
                marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
            },
            {
                 name: "chemistry",
                 marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
                name: "physics",
                marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            }
            ]
    },
     {
     firstName: "Олена", 
    secondName: "Грибеневич", 
     groupName: "3", 
        subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,0,5,]
              },
              {
                  name: "english",
                  marks: [0,2,5,8,7,5,6,"нб",5,0]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
    },
     {
     firstName: "Віталій", 
    secondName: "Лисака", 
     groupName: "3", 
        subject: [ 
              {
                  name: "biology",    
                  marks: ["нб",2,5,8,7,5,6,"нб",5,"нб"]
              },
              {
                  name: "english",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,"нб"]
              },
              {   name: " music" ,
                  marks:["нб",2,5,8,"нб",5,6,"нб",5,"нб"]
              },
              {
                   name: "chemistry",
                   marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              },
              {
                  name: "physics",
                  marks: ["нб",2,5,8,7,5,6,"нб",5,0]
              }
              ]
    },
     {
     firstName: "Михайло", 
    secondName: "Вовкулака", 
     groupName: "3", 
       subject: [ 
            {
                name: "biology",    
                marks: ["нб",2,5,8,7,5,6,0,5,0]
            },
            {
                name: "english",
                marks: [0,2,5,8,7,5,6,"нб",5,0]
            },
            {   name: " music" ,
                marks:["нб",2,5,8,"нб",5,6,"нб",5,0]
            },
            {
                 name: "chemistry",
                 marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            {
                name: "physics",
                marks: ["нб",2,5,8,7,5,6,"нб",5,0]
            },
            ]
    }
];
var searchByName = function(name) {
    var result = [];
    for (var i = 0; i < students.length; ++i) {
        if (students [i].secondName == name) {
           result.push(students [i]);
       }

    }
    return result;
   }

    
function displayStudent() {
    var name = $('#name').val();
    if (name) {
      var resultByStudent = searchByName(name);
    }

    var result = '';
    var total = '';
    var sum = 0;
    var n = 0;
    var avgScore = 0;
    var avgGeneral = 0;
    var nGeneral = 0;

    for (var i = 0; i < resultByStudent.length; ++i) {
      
             result += '<h2>' + resultByStudent[i].firstName + " " + resultByStudent[i].secondName  + '</h2><div class="table-responsive"><table class="table">' + 
          '<thead><tr><th>Предмет</th><th colspan="10">Оцінки</th><th colspan="1">Середній бал</th><th colspan="1">К-сть пропусків</th></thead>' + 
          '<tbody>'
      
      for (var j = 0; j < resultByStudent[i].subject.length; ++j) {
        result += '<tr><td>' + resultByStudent[i].subject[j].name + '</td>';

        for (var k = 0; k < resultByStudent[i].subject[j].marks.length; ++k) {
          result += '<td>' + resultByStudent[i].subject[j].marks[k] + '</td>';

          if (resultByStudent[i].subject[j].marks[k] == 'нб') {
            n++;
          } else {
            sum += (resultByStudent[i].subject[j].marks[k]);
          }
        }
     
        avgScore = (sum / (k - n)).toFixed(2);
        result += '<td>' + avgScore + '</td><td>' + n + '</td></tr>';
        avgGeneral += (sum / (k-n));
        nGeneral += n;
        sum = 0;
        n = 0;
      
    
      }
      total = 'Середній бал: <b>' + (avgGeneral / j).toFixed(2) + '</b><br>К-сть пропусків: <b>' + nGeneral + '</b>';
      result += '</tbody></table>' + total + '</div>';
    }


    if (!result) {
      result = 'Вибачте. Такого студента не знайдено.'
    }     

  $('#ResultDisplay').html(result);
  }

var searchByGroup = function (groupName) {
 var groupName = $('#group').val();
    if (groupName) {
      var resultByStudent = searchByName(name);
    }

    var result = [];
      for (var i = 0; i < students.length; ++i){
        if (students[i].groupName == groupName){
             result.push(students[i]);
            } 
        }
      return result;

  };

  function displayGroup (groupName) {

    var groupName = $('#group').val();
    if (groupName) {
      var resultByGroup = searchByGroup(groupName);
    }

    
    
    var result = '<h1>' + groupName + '</h1>';
    var sum = 0;
    var n = 0;
    var avgScore = 0;
    var avgGeneralStudent = 0;
    var nGeneralStudent = 0;
    var nGeneralGroup = 0;
    var avgGeneralGroup = 0;
    var sumOfSubjectsAllStudent = 0;
    for (var i = 0; i < resultByGroup.length; ++i) {

        result += '<h2>' + resultByGroup[i].firstName + " " + resultByGroup[i].secondName+ '</h2><div class="table-responsive"><table class="table">' + 
        '<thead><tr><th>Предмет</th><th colspan="10">Оцінки</th><th colspan="1">Середній бал</th><th colspan="1">К-сть пропусків</th></thead>' + 
        '<tbody>'

        for (var j = 0; j < resultByGroup[i].subject.length; ++j) {
          result += '<tr><td>' + resultByGroup[i].subject[j].name + '</td>';

          for (var k = 0; k < resultByGroup[i].subject[j].marks.length; ++k) {
            result += '<td>' + resultByGroup[i].subject[j].marks[k] + '</td>';

            if (resultByGroup[i].subject[j].marks[k] == 'нб') {
              n++;
            } else {
              sum += (resultByGroup[i].subject[j].marks[k]);
            }
          }
          avgScore = (sum / (k - n)).toFixed(2);
          result += '<td>' + avgScore + '</td><td>' + n + '</td></tr>';
          avgGeneralStudent += (sum / (k-n));
          nGeneralStudent += n;
          sum = 0;
          n = 0;
      }
      total = 'Середній бал: <b>' + (avgGeneralStudent / j).toFixed(2) + '</b><br>К-сть пропусків: <b>' + nGeneralStudent + '</b>';
      result += '</tbody></table>' + total + '</div>';
      nGeneralGroup += nGeneralStudent;
      avgGeneralGroup += avgGeneralStudent;
      nGeneralStudent = 0;
      avgGeneralStudent = 0; 
    }
    sumOfSubjectsAllStudent = i * j;
    avgGeneralGroup = (avgGeneralGroup / sumOfSubjectsAllStudent).toFixed(2);
    result += '<div class="statOfGroup">К-сть пропусків в групі: <b>' + nGeneralGroup + '</b><br>Середній бал групи: <b>' + avgGeneralGroup + '</b></div>'

    if (!result) {
      result = 'Вибачте. Такої групи не знайдено.'
    }   
    $('#ResultDisplay').html(result);
    }


    var getAll = function () {
    var result = [];
    for (var i = 0; i < students.length; ++i) {
           result.push(students[i]);
      }
        return result;
  }

  function displayGeneralGroupStat () {
    var resultByAll = getAll();
    var result = [];
    var sum = 0;
    var n = 0;
    var avgScore = 0;
    
    for (var i = 0; i < resultByAll.length; ++i) {
        for (var j = 0; j < resultByAll[i].subject.length; ++j) {
          for (var k = 0; k < resultByAll[i].subject[j].marks.length; ++k) {
            if (resultByAll[i].subject[j].marks[k] == 'нб') {
              n++;
            } else {
              sum += (resultByAll[i].subject[j].marks[k]);
            }
          }
      }
    }
    avgScore = (sum / (k*j*i - n)).toFixed(2);
    result += '<h1>Статистика по всіх студентах</h1><div class="statOfGroup">К-сть пропусків: <b>' + n + '</b><br>Середній бал: <b>' + avgScore + '</b></div>'

    $('#ResultDisplay').html(result);
  }

  return {    
  searchByName : searchByName,
  displayStudent : displayStudent,
  searchByGroup :searchByGroup,
  displayGroup : displayGroup,
  getAll : getAll,
  displayGeneralGroupStat : displayGeneralGroupStat
  };

})();
