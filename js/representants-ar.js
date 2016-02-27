var Data = [
            {
              value: 107,
              color: "#f15b40",
              highlight: "#ed1e24",
              label: "حزب العدالة والتنمية",
            },
            {
              value: 60,
              color: "#fdb64e",
              highlight: "#fba51a",
              label: "حزب الاستقلال"
            },
            {
              value: 52,
              color: "#f7ee61",
              highlight: "#f4eb20",
              label: "التجمع الوطني للأحرار"
            },
            {
              value: 47,
              color: "#aed361",
              highlight: "#9bca3c",
              label: "حزب الأصالة والمعاصرة"
            },
            {
              value: 39,
              highlight: "#70c5a4",
              color: "#8ed0b5",
              label: "الاتحاد الاشتراكي للقوات الشعبية"
            },
            {
              value: 32,
              highlight: "#40b8ea",
              color: "#70c3ed",
              label: "الحركة الشعبية"
            },
            {
              value: 23,
              color: "#6783c2",
              highlight: "#436fb6",
              label: "الاتحاد الدستوري"
            },
            {
              value: 18,
              highlight: "#8750a1",
              color: "#9a6db0",
              label: "حزب التقدم والاشتراكية"
            },
            {
              value: 17,
              color: "#f15f90",
              highlight: "#ec197a",
              label: "أحزاب أخرى"
            },
          ];

          var DataFemmes = [
            {
              value: 329,
              label: "رجال",
              color: "#70c3ed",
              highlight: "#40b8ea",
            },
            {
              value: 66,
              color: "#8ec975",
              highlight: "#71c055",
              label: "نساء",
              
            },
          ];

          var DataGov = [
            {
              value: 209,
              label: "نعم",
              color: "#70c3ed",
              highlight: "#40b8ea",
            },
            {
              value: 11,
              label: "دعم",
              color: "#8ec975",
              highlight: "#71c055",
            },
            {
              value: 175,
              label: "معارضة",
              color: "#f15b40",
              highlight: "#ed1e24",
            },
          ];

          window.onload = function(){
            var ctx = document.getElementById("chart-area").getContext("2d");
            window.myDoughnut = new Chart(ctx).Doughnut(Data, {
                          animationEasing : "linear", responsive : true,
            });
            var cty = document.getElementById("chart-area2").getContext("2d");
            window.myDoughnut = new Chart(cty).Doughnut(DataFemmes, {
                          animationEasing : "linear", responsive : true,
            });
            var ctz = document.getElementById("chart-area3").getContext("2d");
            window.myDoughnut = new Chart(ctz).Doughnut(DataGov, {
                          animationEasing : "linear", responsive : true,
            });
        };

