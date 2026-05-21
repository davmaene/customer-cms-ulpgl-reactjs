const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(120), allowNull: false },
  email: { type: DataTypes.STRING(160), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  role: {
    type: DataTypes.ENUM('super_admin', 'faculty_publisher'),
    defaultValue: 'faculty_publisher',
    allowNull: false,
  },
  facultyId: { type: DataTypes.INTEGER, allowNull: true },
  avatar: { type: DataTypes.STRING(255), allowNull: true },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'users', timestamps: true });

const Faculty = sequelize.define('Faculty', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(200), allowNull: false },
  slug: { type: DataTypes.STRING(220), unique: true, allowNull: false },
  domaine: { type: DataTypes.STRING(200), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  dean: { type: DataTypes.STRING(200), allowNull: true },
  secretary: { type: DataTypes.STRING(200), allowNull: true },
  coverImage: { type: DataTypes.STRING(500), allowNull: true },
}, { tableName: 'faculties', timestamps: true });

const Filiere = sequelize.define('Filiere', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  facultyId: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING(200), allowNull: false },
  slug: { type: DataTypes.STRING(220), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  duration: { type: DataTypes.STRING(50), allowNull: true },
  diploma: { type: DataTypes.STRING(120), allowNull: true },
}, { tableName: 'filieres', timestamps: true });

const Content = sequelize.define('Content', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.ENUM('article', 'event', 'activity'), allowNull: false },
  title: { type: DataTypes.STRING(255), allowNull: false },
  slug: { type: DataTypes.STRING(280), allowNull: false },
  excerpt: { type: DataTypes.TEXT, allowNull: true },
  content: { type: DataTypes.TEXT('long'), allowNull: false },
  category: { type: DataTypes.STRING(120), allowNull: true },
  coverImage: { type: DataTypes.STRING(500), allowNull: true },
  eventDate: { type: DataTypes.DATE, allowNull: true },
  location: { type: DataTypes.STRING(255), allowNull: true },
  authorId: { type: DataTypes.INTEGER, allowNull: false },
  facultyId: { type: DataTypes.INTEGER, allowNull: true },
  status: {
    type: DataTypes.ENUM('draft', 'pending', 'published', 'rejected'),
    defaultValue: 'pending',
    allowNull: false,
  },
  rejectionReason: { type: DataTypes.TEXT, allowNull: true },
  publishedAt: { type: DataTypes.DATE, allowNull: true },
  views: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { tableName: 'contents', timestamps: true });

const Newsletter = sequelize.define('Newsletter', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING(160), unique: true, allowNull: false },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'newsletters', timestamps: true });

const ContactMessage = sequelize.define('ContactMessage', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(160), allowNull: false },
  email: { type: DataTypes.STRING(160), allowNull: false },
  subject: { type: DataTypes.STRING(255), allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { tableName: 'contact_messages', timestamps: true });

// Associations
Faculty.hasMany(Filiere, { foreignKey: 'facultyId', as: 'filieres', onDelete: 'CASCADE' });
Filiere.belongsTo(Faculty, { foreignKey: 'facultyId', as: 'faculty' });

User.belongsTo(Faculty, { foreignKey: 'facultyId', as: 'faculty' });
Faculty.hasMany(User, { foreignKey: 'facultyId', as: 'publishers' });

Content.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
Content.belongsTo(Faculty, { foreignKey: 'facultyId', as: 'faculty' });
User.hasMany(Content, { foreignKey: 'authorId', as: 'contents' });

module.exports = { sequelize, User, Faculty, Filiere, Content, Newsletter, ContactMessage };
