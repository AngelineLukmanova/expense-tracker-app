import './App.css';
import SideNav from './SideNav'
import Routes from './Routes';
import { MonthsProvider } from './context/months.context';
import { CategoriesProvider } from './context/categories.context';
import { CurrentMonthProvider } from './context/currentMonth.context';
import { ExpensesProvider } from './context/expenses.context';


function App() {
  return (
    <div className="App">
      <MonthsProvider>
        <ExpensesProvider>
          <CurrentMonthProvider>
            <CategoriesProvider>
              <div className="App-navigation">
                <SideNav />
              </div>
              <div className='App-routes'>
                <Routes />
              </div>
            </CategoriesProvider>
          </CurrentMonthProvider>
        </ExpensesProvider>
      </MonthsProvider>
    </div>
  );
}

export default App;
