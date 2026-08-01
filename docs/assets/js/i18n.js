window.I18n = {
  language: "de",

  translations: {
    de: {
      pageTitle: "Starcode Download Center",
      brandTitle: "Starcode Downloads",
      brandSubtitle: "ZIP & 7Z Center",
      themeButton: "Design wechseln",
      tag: "SCHNELLE DOWNLOADS",
      heroTitle: "Dateien finden.",
      heroAccent: "Ohne Endung.",
      heroTextBefore: "Gib nur den Namen ein, zum Beispiel",
      heroTextAfter: "Es wird automatisch nach",
      and: "und",
      searched: "gesucht.",
      searchPlaceholder: "Dateiname eingeben",
      searchButton: "Suchen",
      filesLabel: "DATEIEN",
      availableDownloads: "Verfügbare Downloads",
      refresh: "Aktualisieren",
      historyLabel: "VERLAUF",
      recentSearches: "Letzte Suchen",
      footer: "© 2026 HackerIP54 Community · GitHub Pages",
      noSearches: "Noch keine Suchen",
      noFiles: "Noch keine Dateien in config.js eingetragen.",
      downloadFile: "Download-Datei",
      unknownSize: "Größe unbekannt",
      download: "Download",
      searchingTitle: "Datei wird gesucht",
      searchingText: "ZIP und 7Z werden geprüft.",
      foundText: "Datei wurde gefunden.",
      downloadNow: "Herunterladen",
      notFoundTitle: "Datei nicht gefunden",
      searchedFor: "Gesucht:"
    },

    en: {
      pageTitle: "Starcode Download Center",
      brandTitle: "Starcode Downloads",
      brandSubtitle: "ZIP & 7Z Center",
      themeButton: "Change theme",
      tag: "FAST DOWNLOADS",
      heroTitle: "Find files.",
      heroAccent: "No extension needed.",
      heroTextBefore: "Enter only the file name, for example",
      heroTextAfter: "The website automatically searches for",
      and: "and",
      searched: "files.",
      searchPlaceholder: "Enter file name",
      searchButton: "Search",
      filesLabel: "FILES",
      availableDownloads: "Available downloads",
      refresh: "Refresh",
      historyLabel: "HISTORY",
      recentSearches: "Recent searches",
      footer: "© 2026 HackerIP54 Community · GitHub Pages",
      noSearches: "No searches yet",
      noFiles: "No files have been added to config.js yet.",
      downloadFile: "Download file",
      unknownSize: "Unknown size",
      download: "Download",
      searchingTitle: "Searching for file",
      searchingText: "Checking ZIP and 7Z files.",
      foundText: "File found.",
      downloadNow: "Download",
      notFoundTitle: "File not found",
      searchedFor: "Searched for:"
    }
  },

  detect() {
    const browserLanguage = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    this.language = browserLanguage.startsWith("de") ? "de" : "en";
    document.documentElement.lang = this.language;
    return this.language;
  },

  t(key) {
    return this.translations[this.language]?.[key] || this.translations.de[key] || key;
  },

  apply() {
    this.detect();

    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = this.t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      element.placeholder = this.t(element.dataset.i18nPlaceholder);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
      element.title = this.t(element.dataset.i18nTitle);
    });

    document.title = this.t("pageTitle");
  }
};