import { Breadcrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import '../style/TabletsPage.scss';

export const TabletsPage = () => {
  return (
    <div className="tablets">
      <Breadcrumbs />
      <h1>Tablets Page</h1>

      <div className="tablets_product">
        No products on this section
      </div>
    </div>
  );
};
