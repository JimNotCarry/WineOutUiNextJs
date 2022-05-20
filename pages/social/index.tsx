import Social from '@/components/social/social';
import Footer from '@/components/footer/menu-footer';
import Winebottle from '@/public/images/winebottle.png';

const SocialPage = () => {
  const image = {
    src: Winebottle,
    width: 11,
    height: 40,
  };

  const routing = '/diary';

  return (
    <div className="social-container">
      <Social />
      <div className="footer-section">
        <Footer data={image} routing={routing} />
      </div>
    </div>
  );
};

export default SocialPage;
