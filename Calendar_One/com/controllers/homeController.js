(function() {
    function homeFunc($scope) {
        $scope.title = "Welcome to SpiderG";
        $scope.innerTxt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        $scope.invoiceImg = "images/einvoice-icon-1-1.png";
        $scope.invoiceTitle = "e-Invoicing";
        $scope.invoiceContent = "Stop chasing for payments. Send professional e-invoices within minutes, set payment reminders, sync your data with Tally and manage cash flow.";

        $scope.leaveImg = "images/leave-salary-icon-1.png";
        $scope.leaveTitle = "Leave and Salary";
        $scope.leaveContent = "Configure salary structure, automate salaries, manage reimbursements and track leaves. Avoid manual entry errors, save time and bring efficiency.";

        $scope.loanImg = "images/loan-icon-2-1.png";
        $scope.loanTitle = "Collateral Free Loans";
        $scope.loanContent = "Get collateral free business loans from India’s leading NBFCs. No processing cost, less processing time competitive interest rates and hassle free process.";

        $scope.btnTxt = "Read More";
        $scope.btnHref = "http://www.spiderg.com/";
    }
    angular.module("app").controller("homeController", homeFunc)
}());
