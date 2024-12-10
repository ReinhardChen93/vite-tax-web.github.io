import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // 在 URL 中保存语言选择
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lng', lng);
    navigate(currentUrl.pathname + currentUrl.search);
  };

  return (
      <div className="flex gap-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded ${
            i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('zh-CN')}
          className={`px-3 py-1 rounded ${
            i18n.language === 'zh-CN' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          中文
        </button>
      </div>
  );
}
