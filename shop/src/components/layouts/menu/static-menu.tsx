import Link from '@components/ui/link';
import "@fontsource/poppins";
import { ROUTES } from '@lib/routes';
import { useTranslation } from 'next-i18next';

const headerLinks = [
  { href: ROUTES.SHOPS, icon: null, label: 'LED TV' },
  { href: ROUTES.OFFERS, icon: null, label: 'AIR CONDITIONER' },
  { href: ROUTES.HELP, label: 'REFRIGERATOR' },
  { href: ROUTES.CONTACT, label: 'HI-FAMILY' },
  { href: ROUTES.CONTACT, label: 'ABOUT US' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label, icon }) => (
        <li key={`${href}${label}`} style={{
          marginLeft: "10%",
          fontSize: "14px",
          color: "#000000",
          fontFamily: "poppins",
          fontWeight: "600",
          whiteSpace: "nowrap"
        }}>
          <Link
            href={href}

            // className="font-normal text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"

          >
            {icon && <span className="me-2">{icon}</span>}
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
