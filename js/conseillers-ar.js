 var Data = [
            {
              value: 24,
              color: "#f15b40",
              highlight: "#ed1e24",
              label: "حزب الاستقلال",
            },
            {
              value: 23,
              color: "#fdb64e",
              highlight: "#fba51a",
              label: "حزب الأصالة والمعاصرة",
            },
            {
              value: 12,
              color: "#f7ee61",
              highlight: "#f4eb20",
              label: "حزب العدالة والتنمية",
            },
            {
              value: 10,
              color: "#aed361",
              highlight: "#9bca3c",
              label: "الحركة الشعبية",
            },
            {
              value: 8,
              color: "#8ed0b5",
              highlight: "#70c5a4",
              label: "التجمع الوطني للأحرار",
            },
            {
              value: 8,
              color: "#70c3ed",
              highlight: "#40b8ea",
              label: "مستقلون",
            },
            {
              value: 6,
              color: "#6783c2",
              highlight: "#436fb6",
              label: "الاتحاد المغربي للشغل",
            },
            {
              value: 5,
              color: "#756bb0",
              highlight: "#5b52a3",
              label: "الاتحاد الاشتراكي للقوات الشعبية",
            },
            {
              value: 4,
              color: "#9a6db0",
              highlight: "#87519f",
              label: "الكنفدرالية الديموقراطية للشغل",
            },
            {
              value: 4,
              color: "#d671ad",
              highlight: "#d1499b",
              label: "الاتحاد الوطني للشغل بالمغرب",
            },
            {
              value: 16,
              color: "#f15f90",
              highlight: "#ec197a",
              label: "أحزاب أخرى",
            },
          ];

          var DataFemmes = [
            {
              value: 106,
              label: "رجال",
              color: "#70c3ed",
              highlight: "#40b8ea",
            },
            {
              value: 14,
              label: "نساء",
              color: "#8ec975",
              highlight: "#71c055",
            },
            ];


          window.onload = function(){
            var ctx = document.getElementById("chart-area").getContext("2d");
            window.myDoughnut = new Chart(ctx).Doughnut(Data, {
                          animationEasing : "linear",responsive : true
            });
            var cty= document.getElementById("chart-area2").getContext("2d");
            window.myDoughnut = new Chart(cty).Doughnut(DataFemmes, {
                          animationEasing : "linear",responsive : true
            });
          };